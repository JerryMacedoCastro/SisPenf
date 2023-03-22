import React, { useReducer, useState } from "react";
import { View, Platform, KeyboardAvoidingView, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Controller, useForm } from "react-hook-form";
import { Button, Text, VStack } from "native-base";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../Routes/app.routes";

import { styles } from "../styles";

import useKeyboardControll from "../../../hooks/useKeyboardControll";
import DateHeader from "../../../components/DateHeader";
import Gradient from "../../../components/Gradient";
import { globalStyles } from "../../../Assets/GlobalStyles";
import { IFirstPhysicalExamForm } from "../../../interfaces";
import PickerSelect from "../../../components/PickerSelect";
import reducer from "../../../helpers/reducer";
import { addAnswers } from "../../../services/answer.service";
import { useAuth } from "../../../contexts/auth";

type Props = StackScreenProps<RootStackParamList, "PartOne">;

const initialState: IFirstPhysicalExamForm = {
  "Condições gerais": "",
  "Estado mental": "",
  Pele: "",
  Cabelo: "",
  Cabeça: "",
  Olhos: "",
  Ouvidos: "",
  "Nariz e seios nasais": "",
  "Boca e garganta": "",
  Pescoço: "",
  Mamas: "",
  Axila: "",
};

const FirstPhysicalExam = ({ route }: Props): JSX.Element => {
  const { patientId } = route.params;
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { control, handleSubmit } = useForm<IFirstPhysicalExamForm>();
  const navigation = useNavigation();
  const isKeyboardShown = useKeyboardControll();
  const [reducerState, dispatch] = useReducer(reducer, initialState);

  const submitForm = async (data: IFirstPhysicalExamForm) => {
    setLoading(true);

    const answeredQuestions = [
      {
        question: "Axila",
        comment: reducerState["Axila"],
        option: data["Axila"],
      },
      {
        question: "Boca e garganta",
        comment: reducerState["Boca e garganta"],
        option: data["Boca e garganta"],
      },
      {
        question: "Cabelo",
        comment: reducerState["Cabelo"],
        option: data["Cabelo"],
      },
      {
        question: "Cabeça",
        comment: reducerState["Cabeça"],
        option: data["Cabeça"],
      },
      {
        question: "Condições gerais",
        comment: reducerState["Condições gerais"],
        option: data["Condições gerais"],
      },
      {
        question: "Estado mental",
        comment: reducerState["Estado mental"],
        option: data["Estado mental"],
      },
      {
        question: "Mamas",
        comment: reducerState["Mamas"],
        option: data["Mamas"],
      },
      {
        question: "Nariz e seios nasais",
        comment: reducerState["Nariz e seios nasais"],
        option: data["Nariz e seios nasais"],
      },
      {
        question: "Olhos",
        comment: reducerState["Olhos"],
        option: data["Olhos"],
      },
      {
        question: "Ouvidos",
        comment: reducerState["Ouvidos"],
        option: data["Ouvidos"],
      },
      {
        question: "Pele",
        comment: reducerState["Pele"],
        option: data["Pele"],
      },
      {
        question: "Pescoço",
        comment: reducerState["Pescoço"],
        option: data["Pescoço"],
      },
    ];

    if (
      !data.Axila ||
      !data["Boca e garganta"] ||
      !data["Cabelo"] ||
      !data["Cabeça"] ||
      !data["Condições gerais"] ||
      !data["Estado mental"] ||
      !data["Mamas"] ||
      !data["Nariz e seios nasais"] ||
      !data["Olhos"] ||
      !data["Ouvidos"] ||
      !data["Pele"] ||
      !data["Pescoço"]
    ) {
      Alert.alert(
        "Preencha todos os campos",
        "Todos os campos são obrigatórios!"
      );
      setLoading(false);
      return;
    }

    console.log(answeredQuestions);
    try {
      if (patientId && user) {
        await addAnswers(user.id, patientId, answeredQuestions);
        navigation.navigate("PartTwo", {
          patientId: patientId,
        });
      } else {
        throw new Error("Usuário ou paciente não encontrados");
      }
    } catch (error) {
      Alert.alert("Ops...", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!isKeyboardShown && (
        <DateHeader title="Exame físico parte 1" destinyBack="ChildbirthData" />
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
                name={"Condições gerais"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Bom" },
                      { description: "Regular" },
                      { description: "Grave" },
                      { description: "Muito grave" },
                    ]}
                    placeholder={"Condições gerais"}
                    onValueChange={onChange}
                    addInfo
                    modalTitle="Condições gerais"
                    onClickSave={(value) =>
                      dispatch({
                        type: "UPDATE",
                        value: value,
                        key: "Condições gerais",
                      })
                    }
                    infoValue={reducerState["Condições gerais"]}
                  />
                )}
              />
              <Controller
                control={control}
                name={"Estado mental"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Consciente" },
                      { description: "Inconsciente" },
                      { description: "Estado de consciência alterado" },
                      { description: "Sonolenta" },
                      { description: "Alerta" },
                      { description: "Desatenção" },
                      { description: "Apatia" },
                      { description: "Sob efeito anestésico" },
                      { description: "Sono e repouso preservados" },
                      { description: "Sono e repouso prejudicados" },
                      { description: "Transtorno mental (especificar)" },
                    ]}
                    placeholder={"Estado mental"}
                    onValueChange={onChange}
                    addInfo
                    modalTitle="Estado mental"
                    onClickSave={(value) =>
                      dispatch({
                        type: "UPDATE",
                        value: value,
                        key: "Estado mental",
                      })
                    }
                    infoValue={reducerState["Estado mental"]}
                  />
                )}
              />
              <Controller
                control={control}
                name={"Pele"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Sem alterações" },
                      { description: "Normocorada" },
                      { description: "Higienizada" },
                      { description: "Não higienizada" },
                      { description: "Doenças de pele " },
                      { description: "Ressecamento" },
                      { description: "Umidade excessiva" },
                      { description: "Prurido" },
                      { description: "Equimose" },
                      { description: "Hematoma" },
                      { description: "Lesões" },
                      { description: "Ferida cirúrgica limpa" },
                      { description: "Ferida cirúrgica infectada" },
                      { description: "Sangramento ativo em ferida operatória" },
                      { description: "Curativo oclusivo em ferida operatória" },
                      { description: "Secreção serosa em ferida operatória" },
                      { description: "Temperatura corporal elevada" },
                      { description: "Temperatura corporal diminuída" },
                      { description: "Afebril" },
                    ]}
                    placeholder={"Pele"}
                    onValueChange={onChange}
                    addInfo
                    modalTitle="Pele"
                    onClickSave={(value) =>
                      dispatch({
                        type: "UPDATE",
                        value: value,
                        key: "Pele",
                      })
                    }
                    infoValue={reducerState["Pele"]}
                  />
                )}
              />
              <Controller
                control={control}
                name={"Cabelo"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Sem alterações" },
                      { description: "Higienizado" },
                      { description: "Não higienizado" },
                      { description: "Queda do cabelo" },
                    ]}
                    placeholder={"Cabelo"}
                    onValueChange={onChange}
                    addInfo
                    modalTitle="Cabelo"
                    onClickSave={(value) =>
                      dispatch({
                        type: "UPDATE",
                        value: value,
                        key: "Cabelo",
                      })
                    }
                    infoValue={reducerState["Cabelo"]}
                  />
                )}
              />
              <Controller
                control={control}
                name={"Cabeça"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Sem alterações" },
                      { description: "Cefaleia" },
                      { description: "Traumatismo" },
                      { description: "Lesões" },
                      { description: "Lipotimia" },
                      { description: "Síncope" },
                      { description: "Vertigem" },
                    ]}
                    placeholder={"Cabeça"}
                    onValueChange={onChange}
                    addInfo
                    modalTitle="Cabeça"
                    onClickSave={(value) =>
                      dispatch({
                        type: "UPDATE",
                        value: value,
                        key: "Cabeça",
                      })
                    }
                    infoValue={reducerState["Cabeça"]}
                  />
                )}
              />
              <Controller
                control={control}
                name={"Olhos"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Sem alterações Dificuldades visuais" },
                      { description: "Dor ocular" },
                      { description: "Diplopia" },
                      { description: "Vermelhidão" },
                      { description: "Edema" },
                      { description: "Lacrimejamento" },
                      { description: "Secreções" },
                      { description: "Escotomas" },
                      { description: "Glaucoma" },
                      { description: "Catarata" },
                      { description: "Uso de óculos" },
                      { description: "Uso de lentes" },
                    ]}
                    placeholder={"Olhos"}
                    onValueChange={onChange}
                    addInfo
                    modalTitle="Olhos"
                    onClickSave={(value) =>
                      dispatch({
                        type: "UPDATE",
                        value: value,
                        key: "Olhos",
                      })
                    }
                    infoValue={reducerState["Olhos"]}
                  />
                )}
              />
              <Controller
                control={control}
                name={"Ouvidos"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Sem alterações" },
                      { description: "Dores de ouvido" },
                      { description: "Infecções" },
                      { description: "Secreções" },
                      { description: "zumbido" },
                      { description: "Vertigem" },
                      { description: "Perda auditiva" },
                      { description: "Uso de aparelho auditivo" },
                    ]}
                    placeholder={"Ouvidos"}
                    onValueChange={onChange}
                    addInfo
                    modalTitle="Ouvidos"
                    onClickSave={(value) =>
                      dispatch({
                        type: "UPDATE",
                        value: value,
                        key: "Ouvidos",
                      })
                    }
                    infoValue={reducerState["Ouvidos"]}
                  />
                )}
              />
              <Controller
                control={control}
                name={"Nariz e seios nasais"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Sem alterações" },
                      { description: "Resfriado" },
                      { description: "Obstrução nasal" },
                      { description: "Secreções" },
                      { description: "Epistaxe" },
                      { description: "hemorragia nasal" },
                      { description: "Dor sinusal" },
                      { description: "Anosmia" },
                    ]}
                    placeholder={"Nariz e seios nasais"}
                    onValueChange={onChange}
                    addInfo
                    modalTitle="Nariz e seios nasais"
                    onClickSave={(value) =>
                      dispatch({
                        type: "UPDATE",
                        value: value,
                        key: "Nariz e seios nasais",
                      })
                    }
                    infoValue={reducerState["Nariz e seios nasais"]}
                  />
                )}
              />
              <Controller
                control={control}
                name={"Boca e garganta"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Sem alterações" },
                      { description: "Dor na cavidade oral" },
                      { description: "Sangramento gengival" },
                      { description: "Dor de dente" },
                      { description: "Presença de lesão" },
                      { description: "Disfagia" },
                      { description: "Rouquidão" },
                      { description: "Ageusia" },
                      { description: "Boa higiene oral" },
                      { description: "Ausência de higienização oral" },
                      { description: "uso de prótese dentária" },
                    ]}
                    placeholder={"Boca e garganta"}
                    onValueChange={onChange}
                    addInfo
                    modalTitle="Boca e garganta"
                    onClickSave={(value) =>
                      dispatch({
                        type: "UPDATE",
                        value: value,
                        key: "Boca e garganta",
                      })
                    }
                    infoValue={reducerState["Boca e garganta"]}
                  />
                )}
              />
              <Controller
                control={control}
                name={"Pescoço"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Sem alterações" },
                      { description: "Dor" },
                      { description: "Restrição ao movimento" },
                      { description: "Presença de Nódulo" },
                      { description: "Gânglios aumentados" },
                      { description: "Gânglios dolorosos" },
                      { description: "Presença de bócio" },
                    ]}
                    placeholder={"Pescoço"}
                    onValueChange={onChange}
                    addInfo
                    modalTitle="Pescoço"
                    onClickSave={(value) =>
                      dispatch({
                        type: "UPDATE",
                        value: value,
                        key: "Pescoço",
                      })
                    }
                    infoValue={reducerState["Pescoço"]}
                  />
                )}
              />
              <Controller
                control={control}
                name={"Mamas"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Sem alterações" },
                      { description: "Íntegras" },
                      { description: "Presença de colostro" },
                      { description: "Ausência de colostro" },
                      { description: "Dor" },
                      { description: "Nódulos" },
                      { description: "Fissura mamilar presente" },
                      { description: "Fissura mamilar ausente" },
                      { description: "ingurgitamento mamário presente" },
                      { description: "ingurgitamento mamário ausente" },
                      { description: "Dor nas mamas Aguda" },
                      { description: "Dor nas mamas aumentada" },
                      { description: "Dor nas mamas reduzida " },
                      { description: "Dor nas mamas ausente" },
                      { description: "História de doença mamária" },
                      { description: "Cirurgia mamária" },
                      { description: "amamentação eficaz" },
                      { description: "amamentação exclusiva prejudicada" },
                      { description: "amamentação exclusiva interrompida" },
                      { description: "amamentação exclusiva melhorada" },
                      {
                        description:
                          "Risco de amamentação exclusiva interrompida",
                      },
                      {
                        description:
                          "Risco de amamentação exclusiva prejudicada",
                      },
                    ]}
                    placeholder={"Mamas"}
                    onValueChange={onChange}
                    addInfo
                    modalTitle="Mamas"
                    onClickSave={(value) =>
                      dispatch({
                        type: "UPDATE",
                        value: value,
                        key: "name",
                      })
                    }
                    infoValue={reducerState["Mamas"]}
                  />
                )}
              />
              <Controller
                control={control}
                name={"Axila"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Sem alterações" },
                      { description: "Dor" },
                      { description: "Nódulo" },
                      { description: "Edema" },
                      { description: "Erupção cutânea" },
                    ]}
                    placeholder={"Axila"}
                    onValueChange={onChange}
                    addInfo
                    modalTitle="Axila"
                    onClickSave={(value) =>
                      dispatch({
                        type: "UPDATE",
                        value: value,
                        key: "Axila",
                      })
                    }
                    infoValue={reducerState["Axila"]}
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

export default FirstPhysicalExam;
