import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
import { RectButton, TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";
import { VStack, Box, Divider, FlatList, Button, Radio, ScrollView } from "native-base";

import DateHeader from "../../components/DateHeader";
import Gradient from "../../components/Gradient";
import PickerSelectChecked from "../../components/PickerSelectChecked";
import useKeyboardControll from "../../hooks/useKeyboardControll";
import { colors, globalStyles } from "../../Assets/GlobalStyles";
import { hospitalBeds, infirmaries } from "../../data";
import { IParamsDiagnosis, keyValue } from "../../interfaces/index";
import { DiagnosisActions, DiagnosisJudgments } from "./diagnosisParams";
import { Controller, useForm } from "react-hook-form";
import ModalWithChecklist from "../../components/ChecklistModal";

const MemoBox = React.memo(Box);
const MemoRadio = React.memo(Radio);

const Diagnosis = (): JSX.Element => {
  const isKeyboardShown = useKeyboardControll();
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit } = useForm<{ judgments: string[], actions: string[] }>();

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

  const cardToDiagnosis = useCallback((focus: string) => {
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
              <Text style={{ fontWeight: "bold", }}>
                {focus.toUpperCase()}
              </Text>
            </Box>
            <Box px="4">
              <VStack>
                <Radio.Group
                  defaultValue={dataJudgments[focus].judgments[0]}
                  name={"Judgments" + focus}
                >
                  {judgments.map((item, index) => {
                    return (
                      <MemoRadio value={item} my={1} key={focus + item + index}>
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
                options={DiagnosisActions[focus].actions.map((item) => {
                  return {
                    label: item,
                    value: item
                  }
                })}
              />
            </Box>
          </VStack>
        </MemoBox>
      );
    } else return <Text> Não encontrado </Text>;
  }, [DiagnosisActions, DiagnosisJudgments, dataJudgments]);

  return (
    <View style={styles.container}>
      <Gradient />
      {!isKeyboardShown && <DateHeader title="Diagnósticos/Resultados" />}
      <View style={styles.content}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text
            numberOfLines={2}
            ellipsizeMode={"tail"}
            style={styles.label}
          >
            Diangostico de Jessica
          </Text>
        </View>
        <ScrollView style={{ display: "flex", width: "100%", padding: 10, marginBottom: 20 }}>
          {Object.keys(DiagnosisJudgments).slice(0, 5).map((focusName) =>
            cardToDiagnosis(focusName)
          )}
        </ScrollView>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            padding: 10
          }}
        >
          <Button
            style={[{ ...globalStyles.button, marginTop: 0 }, globalStyles.secondaryButton]}
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
