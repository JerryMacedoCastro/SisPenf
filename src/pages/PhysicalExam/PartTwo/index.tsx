import React, { useEffect, useReducer, useState } from "react";
import {
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackScreenProps } from "@react-navigation/stack";

import { styles } from "../styles";
import useKeyboardControll from "../../../hooks/useKeyboardControll";
import DateHeader from "../../../components/DateHeader";
import Gradient from "../../../components/Gradient";
import { globalStyles } from "../../../Assets/GlobalStyles";
import {
  ISecondPhysicalExamForm,
  SecondPhysicalExamType,
} from "../../../interfaces";
import { RootStackParamList } from "../../../Routes/app.routes";
import { useAuth } from "../../../contexts/auth";
import { Controller, useForm } from "react-hook-form";
import reducer from "../../../helpers/reducer";
import { addAnswers, getAnswers } from "../../../services/answer.service";
import { Button, VStack } from "native-base";
import PickerSelect from "../../../components/PickerSelect";
import { getAnswerByDescription } from "../../../helpers/answers";

type Props = StackScreenProps<RootStackParamList, "PartTwo">;

const initialState: ISecondPhysicalExamForm = {
  "Sistema respiratório": "",
  "Sistema cardiovascular": "",
  "Sistema vascular periférico": "",
  "Sistema gastrointestinal": "",
  "Sistema urinário": "",
  "Sistema ginecológico/obstétrico": "",
  "Saúde sexual": "",
  "Sistema musculoesquelético": "",
  "Sistema neurológico": "",
  "Sistema hematológico": "",
  "Sistema endócrino": "",
  Autocuidado: "",
};

const SecondPhysicalExam = ({ route }: Props): JSX.Element => {
  const { patientId } = route.params;
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { control, handleSubmit, setValue, getValues } =
    useForm<ISecondPhysicalExamForm>();
  const navigation = useNavigation();
  const isKeyboardShown = useKeyboardControll();
  const [reducerState, dispatch] = useReducer(reducer, initialState);

  const submitForm = async (data: ISecondPhysicalExamForm) => {
    setLoading(true);

    const answeredQuestions = [
      {
        question: "Autocuidado",
        comment: reducerState["Autocuidado"],
        option: data["Autocuidado"],
      },
      {
        question: "Saúde sexual",
        comment: reducerState["Saúde sexual"],
        option: data["Saúde sexual"],
      },
      {
        option: data["Sistema endócrino"],
        question: "Sistema endócrino",
        comment: reducerState["Sistema endócrino"],
      },
      {
        option: data["Sistema gastrointestinal"],
        question: "Sistema gastrointestinal",
        comment: reducerState["Sistema gastrointestinal"],
      },
      {
        option: data["Sistema ginecológico/obstétrico"],
        question: "Sistema gincológico/obstétrico",
        comment: reducerState["Sistema gincológico/obstétrico"],
      },
      {
        option: data["Sistema hematológico"],
        question: "Sistema hematológico",
        comment: reducerState["Sistema hematológico"],
      },
      {
        option: data["Sistema musculoesquelético"],
        question: "Sistema musculoesquelético",
        comment: reducerState["Sistema musculoesquelético"],
      },
      {
        option: data["Sistema neurológico"],
        question: "Sistema neurológico",
        comment: reducerState["Sistema neurológico"],
      },
      {
        option: data["Sistema respiratório"],
        question: "Sistema respiratório",
        comment: reducerState["Sistema respiratório"],
      },
      {
        option: data["Sistema urinário"],
        question: "Sistema urinário",
        comment: reducerState["Sistema urinário"],
      },
      {
        option: data["Sistema vascular periférico"],
        question: "Sistema vascular periférico",
        comment: reducerState["Sistema vascular periférico"],
      },
      {
        option: data["Sistema cardiovascular"],
        question: "Sistema cardiovascular",
        comment: reducerState["Sistema cardiovascular"],
      },
    ];

    if (
      !data.Autocuidado ||
      !data["Saúde sexual"] ||
      !data["Sistema endócrino"] ||
      !data["Sistema gastrointestinal"] ||
      !data["Sistema ginecológico/obstétrico"] ||
      !data["Sistema hematológico"] ||
      !data["Sistema musculoesquelético"] ||
      !data["Sistema neurológico"] ||
      !data["Sistema respiratório"] ||
      !data["Sistema urinário"] ||
      !data["Sistema vascular periférico"] ||
      !data["Sistema cardiovascular"]
    ) {
      Alert.alert(
        "Preencha todos os campos",
        "Todos os campos são obrigatórios!"
      );
      setLoading(false);
      return;
    }

    try {
      if (patientId && user) {
        await addAnswers(user.id, patientId, answeredQuestions);
        navigation.navigate("Home");
      } else {
        throw new Error("Usuário ou paciente não encontrados");
      }
    } catch (error) {
      Alert.alert("Ops...", error.message);
    } finally {
      setLoading(false);
    }
  };

  const getPatientInfo = async (id: number) => {
    const answersArray = await getAnswers(id, 6);

    answersArray.forEach((answer) => {
      dispatch({
        type: "UPDATE",
        value: answer.comment,
        key: answer.description,
      });
    });

    for (const [key] of Object.entries(initialState)) {
      setValue(
        key as SecondPhysicalExamType,
        getAnswerByDescription(key, answersArray)
      );
    }
  };

  useEffect(() => {
    if (patientId) getPatientInfo(Number(patientId));
  }, []);

  return (
    <>
      {!isKeyboardShown && (
        <DateHeader title="Exame físico parte 2" destinyBack="PartOne" />
      )}
      <SafeAreaView style={styles.container}>
        <Gradient />
        <KeyboardAvoidingView
          style={styles.content}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={50}
        >
          <ScrollView
            contentContainerStyle={{
              position: "relative",
            }}
          >
            <VStack
              bgColor={"white"}
              flex={1}
              px={10}
              paddingTop={6}
              paddingBottom={4}
            >
              <Controller
                control={control}
                name={"Sistema respiratório"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Sem alterações" },
                      { description: "Doenças pulmonares" },
                      { description: "Asma" },
                      { description: "Enfisema pulmonar" },
                      { description: "Bronquite" },
                      { description: "Pneumonia" },
                      { description: "Tuberculose" },
                      { description: "Dor torácica ao respirar" },
                      { description: "Respiração ofegante" },
                      { description: "Dispneia em repouso" },
                      { description: "eupneica em repouso" },
                      { description: "Tosse" },
                      { description: "Escarro" },
                      { description: "Hemoptise" },
                    ]}
                    selectedValue={getValues("Sistema respiratório")}
                    placeholder={"Sistema respiratório"}
                    onValueChange={onChange}
                    addInfo
                    modalTitle="Sistema respiratório"
                    onClickSave={(value) =>
                      dispatch({
                        type: "UPDATE",
                        value: value,
                        key: "Sistema respiratório",
                      })
                    }
                    setValue={(value) =>
                      dispatch({
                        type: "UPDATE",
                        value: value,
                        key: "Sistema respiratório",
                      })
                    }
                    infoValue={reducerState["Sistema respiratório"]}
                  />
                )}
              />
              <Controller
                control={control}
                name={"Sistema cardiovascular"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Sem alterações" },
                      { description: "Pressão sanguínea Controlada" },
                      { description: "Pressão sanguínea Elevada" },
                      { description: "Pressão sanguínea Diminuída" },
                      { description: "Dor precordial" },
                      { description: "Palpitações" },
                      { description: "Cianose" },
                      { description: "Dispneia ao esforço" },
                      { description: "Ortopneia" },
                      { description: "Dispneia paroxística noturna" },
                      { description: "Nictúria" },
                      { description: "Edema" },
                      { description: "Sopro Cardíaco" },
                      { description: "Doença coronariana" },
                      { description: "Anemia" },
                    ]}
                    selectedValue={getValues("Sistema cardiovascular")}
                    placeholder={"Sistema cardiovascular"}
                    onValueChange={onChange}
                    addInfo
                    modalTitle="Sistema cardiovascular"
                    onClickSave={(value) =>
                      dispatch({
                        type: "UPDATE",
                        value: value,
                        key: "Sistema cardiovascular",
                      })
                    }
                    setValue={(value) =>
                      dispatch({
                        type: "UPDATE",
                        value: value,
                        key: "Sistema cardiovascular",
                      })
                    }
                    infoValue={reducerState["Sistema cardiovascular"]}
                  />
                )}
              />
              <Controller
                control={control}
                name={"Sistema vascular periférico"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Sem alterações" },
                      { description: "Edema periférico ausente" },
                      { description: "Edema periférico presente" },
                      { description: "Dormência" },
                      { description: "Formigamento" },
                      { description: "Cianose de MMSS" },
                      { description: "Palidez de MMSS" },
                      { description: "Cianose de MMII" },
                      { description: "Palidez de MMII" },
                      { description: "Varizes" },
                      { description: "Tromboflebite" },
                      { description: "Úlceras" },
                      { description: "Uso de meias compressivas" },
                      { description: "Claudicação intermitente" },
                      { description: "Perfusão tissular Eficaz  " },
                      { description: "Perfusão tissular Ineficaz" },
                    ]}
                    selectedValue={getValues("Sistema vascular periférico")}
                    placeholder={"Sistema vascular periférico"}
                    onValueChange={onChange}
                    addInfo
                    modalTitle="Sistema vascular periférico"
                    onClickSave={(value) =>
                      dispatch({
                        type: "UPDATE",
                        value: value,
                        key: "Sistema vascular periférico",
                      })
                    }
                    setValue={(value) =>
                      dispatch({
                        type: "UPDATE",
                        value: value,
                        key: "Sistema vascular periférico",
                      })
                    }
                    infoValue={reducerState["Sistema vascular periférico"]}
                  />
                )}
              />
              <Controller
                control={control}
                name={"Sistema gastrointestinal"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Sem alteraçõe" },
                      { description: "Apetite norma" },
                      { description: "Prejudicado" },
                      { description: "Excessivo" },
                      { description: "Intolerância alimentar" },
                      { description: "Alergia alimentar" },
                      { description: "Disfagia" },
                      { description: "azia" },
                      { description: "Indigestão" },
                      { description: "Dor associada à alimentação" },
                      { description: "Dor abdominal" },
                      { description: "Pirose" },
                      { description: "Náuseas ausentes" },
                      { description: "Náuseas presentes" },
                      { description: "Vômito presente" },
                      { description: "Vômito ausente" },
                      { description: "Hematêmese" },
                      { description: "Flatulência presente" },
                      { description: "Flatulência negativa" },
                      { description: "Defecação eficaz" },
                      { description: "Defecação ausente" },
                      { description: "Defecação prejudicada" },
                      { description: "Constipação" },
                      { description: "Diarreia" },
                      { description: "Fezes escuras" },
                      { description: "Sangramento retal" },
                      { description: "Hemorroidas" },
                    ]}
                    selectedValue={getValues("Sistema gastrointestinal")}
                    placeholder={"Sistema gastrointestinal"}
                    onValueChange={onChange}
                    addInfo
                    modalTitle="Sistema gastrointestinal"
                    onClickSave={(value) =>
                      dispatch({
                        type: "UPDATE",
                        value: value,
                        key: "Sistema gastrointestinal",
                      })
                    }
                    setValue={(value) =>
                      dispatch({
                        type: "UPDATE",
                        value: value,
                        key: "Sistema gastrointestinal",
                      })
                    }
                    infoValue={reducerState["Sistema gastrointestinal"]}
                  />
                )}
              />
              <Controller
                control={control}
                name={"Sistema urinário"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Normal" },
                      { description: "Ausente" },
                      { description: "Micção prejudicada" },
                      { description: "Urgência" },
                      { description: "Frequência" },
                      { description: "Nictúria" },
                      { description: "Disúria" },
                      { description: "Poliúria" },
                      { description: "Oligúria" },
                      { description: "Hematúria" },
                      {
                        description: "Presente em Cateter Vesical de Demora",
                      },
                      { description: "Doença renal" },
                      { description: "Cálculos renais" },
                      { description: "ITU" },
                      { description: "Dor em região suprapúbica" },
                      { description: "Dor lombar" },
                    ]}
                    selectedValue={getValues("Sistema urinário")}
                    placeholder={"Sistema urinário"}
                    onValueChange={onChange}
                    addInfo
                    modalTitle="Sistema urinário"
                    onClickSave={(value) =>
                      dispatch({
                        type: "UPDATE",
                        value: value,
                        key: "Sistema urinário",
                      })
                    }
                    setValue={(value) =>
                      dispatch({
                        type: "UPDATE",
                        value: value,
                        key: "Sistema urinário",
                      })
                    }
                    infoValue={reducerState["Sistema urinário"]}
                  />
                )}
              />
              <Controller
                control={control}
                name={"Sistema ginecológico/obstétrico"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Sem alterações" },
                      { description: "Fundo uterino  em involução" },
                      {
                        description:
                          "Formação do globo de segurança de pinnard",
                      },
                      { description: "Lóquios fisiológico" },
                      { description: "Sangramento vaginal Normal " },
                      { description: "Sangramento vaginal Aumentado" },
                      { description: "Sangramento vaginal Severo" },
                      { description: "Risco de hemorragia pós-parto Alto " },
                      { description: "Risco de hemorragia pós-parto Presente" },
                      { description: "Risco de hemorragia pós-parto Ausente" },
                      { description: "Ferida operatória limpa" },
                      { description: "Sangramento anormal" },
                      { description: "Cólica" },
                      { description: "Prurido vaginal" },
                      { description: "Leucorréia" },
                    ]}
                    selectedValue={getValues("Sistema ginecológico/obstétrico")}
                    placeholder={"Sistema gincológico/obstétrico"}
                    onValueChange={onChange}
                    addInfo
                    modalTitle="Sistema gincológico/obstétrico"
                    onClickSave={(value) =>
                      dispatch({
                        type: "UPDATE",
                        value: value,
                        key: "Sistema gincológico/obstétrico",
                      })
                    }
                    setValue={(value) =>
                      dispatch({
                        type: "UPDATE",
                        value: value,
                        key: "Sistema gincológico/obstétrico",
                      })
                    }
                    infoValue={reducerState["Sistema gincológico/obstétrico"]}
                  />
                )}
              />
              <Controller
                control={control}
                name={"Saúde sexual"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Sem alterações" },
                      { description: "dispareunia" },
                      { description: "Método contraceptivo preferencial" },
                      { description: "Gonorreia" },
                      { description: "Herpes" },
                      { description: "Clamídia" },
                      { description: "Verrugas venéreas" },
                      { description: "HIV/AIDS" },
                      { description: "Sífilis" },
                    ]}
                    selectedValue={getValues("Saúde sexual")}
                    placeholder={"Saúde sexual"}
                    onValueChange={onChange}
                    addInfo
                    modalTitle="Saúde sexual"
                    onClickSave={(value) =>
                      dispatch({
                        type: "UPDATE",
                        value: value,
                        key: "Saúde sexual",
                      })
                    }
                    setValue={(value) =>
                      dispatch({
                        type: "UPDATE",
                        value: value,
                        key: "Saúde sexual",
                      })
                    }
                    infoValue={reducerState["Saúde sexual"]}
                  />
                )}
              />
              <Controller
                control={control}
                name={"Sistema musculoesquelético"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Sem alterações" },
                      { description: "Deambulação adequada" },
                      { description: "Deambulação prejudicada" },
                      { description: "Deambulação ausente" },
                      { description: "Exaustão pós-parto" },
                      { description: "Artrite" },
                      { description: "Gota" },
                      { description: "Dor nas articulações" },
                      { description: "Tigidez nas articulações" },
                      { description: "Edema nas articulações" },
                      { description: "Deformidade" },
                      { description: "Restrições aos movimentos" },
                      { description: "Dor muscular" },
                      { description: "Cãibras" },
                      { description: "Fraqueza" },
                      { description: "Problemas de marcha" },
                      { description: "Problemas de coordenação" },
                      { description: "Dor lombar" },
                      { description: "Dor cervical" },
                      { description: "Risco de queda Aumentado" },
                      { description: "Risco de queda diminuído" },
                      { description: "Deficiência física" },
                    ]}
                    selectedValue={getValues("Sistema musculoesquelético")}
                    placeholder={"Sistema musculoesquelético"}
                    onValueChange={onChange}
                    addInfo
                    modalTitle="Sistema musculoesquelético"
                    onClickSave={(value) =>
                      dispatch({
                        type: "UPDATE",
                        value: value,
                        key: "Sistema musculoesquelético",
                      })
                    }
                    setValue={(value) =>
                      dispatch({
                        type: "UPDATE",
                        value: value,
                        key: "Sistema musculoesquelético",
                      })
                    }
                    infoValue={reducerState["Sistema musculoesquelético"]}
                  />
                )}
              />
              <Controller
                control={control}
                name={"Sistema neurológico"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Sem alterações" },
                      { description: "Desorientação" },
                      { description: "História de convulsão" },
                      { description: "AVC" },
                      { description: "Desmaio" },
                      { description: "Cegueira temporária" },
                      { description: "Tremores" },
                      { description: "Paralisia ou problemas de coordenação" },
                      { description: "Parestesia" },
                      { description: "Transtorno de memória" },
                      { description: "Nervosismo" },
                      { description: "Depressão" },
                      { description: "Alucinação" },
                    ]}
                    selectedValue={getValues("Sistema neurológico")}
                    placeholder={"Sistema neurológico"}
                    onValueChange={onChange}
                    addInfo
                    modalTitle="Sistema neurológico"
                    onClickSave={(value) =>
                      dispatch({
                        type: "UPDATE",
                        value: value,
                        key: "Sistema neurológico",
                      })
                    }
                    setValue={(value) =>
                      dispatch({
                        type: "UPDATE",
                        value: value,
                        key: "Sistema neurológico",
                      })
                    }
                    infoValue={reducerState["Sistema neurológico"]}
                  />
                )}
              />
              <Controller
                control={control}
                name={"Sistema hematológico"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Sem alterações" },
                      { description: "Equimoses" },
                      {
                        description:
                          "Tendência à hemorragia nas mucosas ou pele",
                      },
                      { description: "Aumento dos gânglios" },
                      { description: "Transfusão sanguínea" },
                      { description: "Reação transfusional" },
                      { description: "Risco de infecção aumentado" },
                      { description: "Risco de infecção diminuído" },
                      {
                        description:
                          "Risco de transmissão de infecção para o neonato Aumentado ",
                      },
                      {
                        description:
                          "Risco de transmissão de infecção para o neonato diminuído ",
                      },
                      {
                        description:
                          "Risco de transmissão de infecção para o neonato ausente",
                      },
                    ]}
                    selectedValue={getValues("Sistema hematológico")}
                    placeholder={"Sistema hematológico"}
                    onValueChange={onChange}
                    addInfo
                    modalTitle="Sistema hematológico"
                    onClickSave={(value) =>
                      dispatch({
                        type: "UPDATE",
                        value: value,
                        key: "Sistema hematológico",
                      })
                    }
                    setValue={(value) =>
                      dispatch({
                        type: "UPDATE",
                        value: value,
                        key: "Sistema hematológico",
                      })
                    }
                    infoValue={reducerState["Sistema hematológico"]}
                  />
                )}
              />
              <Controller
                control={control}
                name={"Sistema endócrino"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Sem alterações" },
                      { description: "Diabetes" },
                      { description: "Doenças da tireóide" },
                      { description: "Intolerância ao calor" },
                      { description: "Intolerância ao frio" },
                      { description: "Sudorese excessiva" },
                      { description: "Distribuição anormal de pelos" },
                      { description: "Necessidade de terapia hormonal" },
                    ]}
                    selectedValue={getValues("Sistema endócrino")}
                    placeholder={"Sistema endócrino"}
                    onValueChange={onChange}
                    addInfo
                    modalTitle="Sistema endócrino"
                    onClickSave={(value) =>
                      dispatch({
                        type: "UPDATE",
                        value: value,
                        key: "Sistema endócrino",
                      })
                    }
                    setValue={(value) =>
                      dispatch({
                        type: "UPDATE",
                        value: value,
                        key: "Sistema endócrino",
                      })
                    }
                    infoValue={reducerState["Sistema endócrino"]}
                  />
                )}
              />
              <Controller
                control={control}
                name={"Autocuidado"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      {
                        description:
                          "Déficit de autocuidado para banho e/ou higiene corpora",
                      },
                      {
                        description:
                          "Déficit de autocuidado para vestir-se e despir-s",
                      },
                      { description: "Higiene corporal present" },
                      { description: "Higiene corporal inefica" },
                      { description: "Higiene corporal ausent" },
                      { description: "Higiene íntima prejudicada" },
                      { description: "Higiene íntima eficaz" },
                    ]}
                    selectedValue={getValues("Autocuidado")}
                    placeholder={"Autocuidado"}
                    onValueChange={onChange}
                    addInfo
                    modalTitle="Autocuidado"
                    onClickSave={(value) =>
                      dispatch({
                        type: "UPDATE",
                        value: value,
                        key: "Autocuidado",
                      })
                    }
                    setValue={(value) =>
                      dispatch({
                        type: "UPDATE",
                        value: value,
                        key: "Autocuidado",
                      })
                    }
                    infoValue={reducerState["Autocuidado"]}
                  />
                )}
              />
            </VStack>
          </ScrollView>
        </KeyboardAvoidingView>

        {!isKeyboardShown && (
          <View style={styles.confirmButtonsContainer}>
            <Button
              bgColor={"green.900"}
              style={globalStyles.button}
              onPress={handleSubmit(submitForm)}
              isLoading={loading}
              isLoadingText="Carregando"
            >
              <Text style={globalStyles.primaryButtonText}>Continuar</Text>
            </Button>
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

export default SecondPhysicalExam;
