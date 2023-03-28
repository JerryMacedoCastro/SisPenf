import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Alert, Text, View } from "react-native";
import { styles } from "./styles";
import { VStack, Box, Divider, Button, Radio, ScrollView } from "native-base";

import DateHeader from "../../components/DateHeader";
import Gradient from "../../components/Gradient";
import useKeyboardControll from "../../hooks/useKeyboardControll";
import { globalStyles } from "../../Assets/GlobalStyles";
import { IParamsDiagnosis, IPatientResponse } from "../../interfaces/index";
import { DiagnosisActions, DiagnosisJudgments } from "./diagnosisParams";
import ModalWithChecklist from "../../components/ChecklistModal";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useAuth } from "../../contexts/auth";
import {
  addAnswerDiagnostic,
  getAnswers,
  IQuestionsWithAnswerDiagnoses,
} from "../../services/answer.service";
import { SkeletonDiagnostic } from "../../components/SkeletonDiagnostic";
import { LoadingModal } from "../../components/LoadingModal";

const MemoBox = React.memo(Box);
const MemoRadio = React.memo(Radio);

type IDiagnosisParam = { patient: IPatientResponse };

const Diagnosis = (): JSX.Element => {
  const { params: patient } = useRoute<RouteProp<IDiagnosisParam, "patient">>();
  const isKeyboardShown = useKeyboardControll();
  const [selectedjudgments, setSelectedJudgments] = useState<{
    [x: string]: string;
  }>({});
  const [checkedActions, setCheckedActions] = useState<{
    [x: string]: string[];
  }>({});
  const [loadingInitial, setLoadingInitial] = useState(true);
  const { user } = useAuth();
  const [message, setMessage] = useState<string>("Enviando 0%");
  const [openModalLoading, setOpenModalLoading] = useState<boolean>(false);

  const generateInitialDataJudgments = () => {
    const aux: {
      [x: string]: IParamsDiagnosis;
    } = {};
    const namesFocus = Object.keys(DiagnosisJudgments);
    namesFocus.forEach((element) => {
      aux[element] = {
        judgments: [],
        actions: [],
      };
    });
    return aux;
  };

  const dataJudgments = useMemo(() => {
    return generateInitialDataJudgments();
  }, []);

  const saveData = async () => {
    const actionsFocus = Object.keys(selectedjudgments);

    if (actionsFocus.length < 27) {
      // 27 is number of judgments
      Alert.alert("Oops !", "Selecione todos os julgamentos");
      return;
    }
    let progress = 0;

    setOpenModalLoading(true);
    setMessage("Enviando 0%");

    actionsFocus.forEach(async (nameFocus, index) => {
      try {
        const answeredQuestions = {
          question: nameFocus,
          comment: "",
          option: [
            {
              description: selectedjudgments[nameFocus],
            },
          ],
          diagnoses:
            checkedActions[nameFocus]?.map((description) => {
              return {
                description,
              };
            }) || [],
        } as IQuestionsWithAnswerDiagnoses;

        if (patient.id && user) {
          await addAnswerDiagnostic(
            user.id,
            patient.id,
            answeredQuestions
          ).then(() => {
            progress++;
            const percentage = Math.ceil(
              ((progress + 1) / actionsFocus.length) * 100
            );

            if (progress === actionsFocus.length) {
              Alert.alert("Sucesso", "Diagnósticos enviados");
              setOpenModalLoading(false);
            } else {
              if (percentage >= 100) setMessage("Diagnósticos enviados");
              else setMessage(`Enviando ${percentage}%`);
            }
          });
        } else {
          Alert.alert("Erro !", "Erro");
          setOpenModalLoading(false);
          throw new Error("Erro ao Salvar Diagnosticos");
        }
      } catch (err) {
        console.log("Erro em ", err.message);
        setOpenModalLoading(false);
        Alert.alert("Erro !", "Erro");
        return;
      }
    });
  };

  const getPatientDiagnosesInfo = async () => {
    const answersArray = await getAnswers(patient.id, 7);
    const auxJudgments: {
      [x: string]: string;
    } = {};
    const auxActions: {
      [x: string]: string[];
    } = {};

    answersArray.forEach((element) => {
      auxJudgments[element.question.description] =
        element.selectedOptions[0].description;

      auxActions[element.question.description] = element.selectedDiagnoses.map(
        (item) => item.description
      );
    });

    setSelectedJudgments(auxJudgments);
    setCheckedActions(auxActions);
    setLoadingInitial(false);
  };

  useEffect(() => {
    if (loadingInitial) getPatientDiagnosesInfo();
  }, [loadingInitial]);

  const cardToDiagnosis = useCallback(
    (focus: string) => {
      const params = DiagnosisJudgments[focus];

      if (params && dataJudgments) {
        const { judgments } = params;
        return (
          <MemoBox
            borderWidth="1"
            borderRadius="md"
            my="2"
            key={focus}
            marginRight="2"
            width="100%"
          >
            <VStack space="4" divider={<Divider />} width="100%">
              <Box px="4" pt="4">
                <Text style={{ fontWeight: "bold" }}>
                  {focus.toUpperCase()}
                </Text>
              </Box>
              <Box px="4">
                <VStack>
                  <Radio.Group
                    defaultValue={selectedjudgments[focus] || ""}
                    name={"Judgments" + focus}
                    key={"Judgments" + focus}
                    onChange={(item) => {
                      setSelectedJudgments((aux) => {
                        aux[focus] = item;
                        return aux;
                      });
                    }}
                  >
                    {judgments.map((item, index) => {
                      return (
                        <MemoRadio
                          value={item}
                          my={1}
                          key={focus + item + index}
                        >
                          {item}
                        </MemoRadio>
                      );
                    })}
                  </Radio.Group>
                </VStack>
              </Box>
              <Box
                px="4"
                pb="4"
                width="100%"
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <ModalWithChecklist
                  titleChecklist={`Checklist ${focus}`}
                  textButton="Ações ou Meios"
                  dataCheckedInitial={checkedActions[focus] || []}
                  saveDataCheckedFinal={(value) => {
                    const aux = checkedActions;
                    aux[focus] = value as string[];
                    setCheckedActions(aux);
                  }}
                  options={DiagnosisActions[focus].actions.map((item) => {
                    return {
                      label: item,
                      value: item,
                    };
                  })}
                />
              </Box>
            </VStack>
          </MemoBox>
        );
      } else return <Text> Não encontrado </Text>;
    },
    [selectedjudgments, checkedActions, dataJudgments]
  );

  if (openModalLoading)
    return (
      <LoadingModal
        message={message}
        isOpen={openModalLoading}
        onClose={() => console.log("")}
      />
    );

  return (
    <View style={styles.container}>
      <Gradient />
      {!isKeyboardShown && <DateHeader title="Diagnósticos/Resultados" />}
      <View style={styles.content}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text numberOfLines={2} ellipsizeMode={"tail"} style={styles.label}>
            {`Diagnóstico de ${patient.name}`}
          </Text>
        </View>
        <ScrollView
          style={{
            display: "flex",
            width: "90%",
            padding: 10,
            marginBottom: 20,
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: 20,
          }}
        >
          {loadingInitial
            ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
                return <SkeletonDiagnostic key={"Skeleton" + item} />;
              })
            : Object.keys(DiagnosisJudgments).map((focusName) =>
                cardToDiagnosis(focusName)
              )}
        </ScrollView>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Button
            style={[
              { ...globalStyles.button, marginTop: 0 },
              globalStyles.secondaryButton,
            ]}
            onPress={saveData}
          >
            <Text
              style={{ ...globalStyles.secondaryButtonText, marginLeft: 0 }}
            >
              Salvar
            </Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Diagnosis;
