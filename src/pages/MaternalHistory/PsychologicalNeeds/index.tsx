import React, { useState } from "react";
import { View, Platform, KeyboardAvoidingView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

import { styles } from "../styles";
import DateHeader from "../../../components/DateHeader";
import Gradient from "../../../components/Gradient";
import { ScrollView } from "react-native-gesture-handler";
import { globalStyles } from "../../../Assets/GlobalStyles";
import useKeyboardControll from "../../../hooks/useKeyboardControll";
import { RootStackParamList } from "../../../Routes/app.routes";
import { IPsycologicalNeedsForm } from "../../../interfaces";

import { useAuth } from "../../../contexts/auth";
import { Controller, useForm } from "react-hook-form";
import PickerSelect from "../../../components/PickerSelect";
import { Button, Text, VStack } from "native-base";
import { addAnswers } from "../../../services/answer.service";
import CommonInput from "../../../components/Input/CommonInput";

type Props = StackScreenProps<RootStackParamList, "PsychologicalNeeds">;

const index = ({ route }: Props): JSX.Element => {
  const { user } = useAuth();
  const { patientId } = route.params;
  const navigation = useNavigation();
  const isKeyboardShown = useKeyboardControll();
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit } = useForm<IPsycologicalNeedsForm>();

  const submitForm = async (data: IPsycologicalNeedsForm) => {
    try {
      setLoading(true);
      const answeredQuestions = [
        {
          question: "Estado civil",
          option: data["Estado civil"],
        },
        {
          question: "Falta de apoio social",
          comment: data["Falta de apoio social"],
        },
        {
          question: "Escolaridade",
          option: data.Escolaridade,
        },
        {
          question: "Falta de conhecimento sobre a amamentação",
          option: data["Falta de conhecimento sobre a amamentação"],
        },
        {
          question: "Falta de conhecimento sobre a ordenha do leite materno",
          option:
            data["Falta de conhecimento sobre a ordenha do leite materno"],
        },
        {
          question:
            "Falta de conhecimento sobre a situação clínica do recém-nascido",
          option:
            data[
              "Falta de conhecimento sobre a situação clínica do recém-nascido"
            ],
        },
        {
          question:
            "Falta de conhecimento sobre o autocuidado com a ferida cirúrgica",
          option:
            data[
              "Falta de conhecimento sobre o autocuidado com a ferida cirúrgica"
            ],
        },
        {
          question: "Falta de conhecimento sobre o autocuidado com as mamas",
          option:
            data["Falta de conhecimento sobre o autocuidado com as mamas"],
        },
        {
          question: "Falta de conhecimento sobre os cuidados com recém-nascido",
          option:
            data["Falta de conhecimento sobre os cuidados com recém-nascido"],
        },
        {
          question: "Falta de conhecimento sobre o planejamento familiar",
          option: data["Falta de conhecimento sobre o planejamento familiar"],
        },
        {
          question: "Comunicação verbal prejudicada",
          comment: data["Comunicação verbal prejudicada"],
        },
        {
          question: "Ansiedade",
          option: data.Ansiedade,
        },
        {
          question: "Atitude familiar conflitante",
          comment: data["Atitude familiar conflitante"],
        },
        {
          question: "Maternidade/paternidade prejudicada",
          option: data["Maternidade/paternidade prejudicada"],
        },
        {
          question: "Risco de maternidade/paternidade prejudicada",
          option: data["Risco de maternidade/paternidade prejudicada"],
        },
        {
          question: "Risco de vínculo mãe-filho prejudicado",
          option: data["Risco de vínculo mãe-filho prejudicado"],
        },
      ];

      if (
        !data["Estado civil"] ||
        !data["Falta de apoio social"] ||
        !data["Escolaridade"] ||
        !data["Falta de conhecimento sobre a amamentação"] ||
        !data["Falta de conhecimento sobre a ordenha do leite materno"] ||
        !data[
          "Falta de conhecimento sobre a situação clínica do recém-nascido"
        ] ||
        !data[
          "Falta de conhecimento sobre o autocuidado com a ferida cirúrgica"
        ] ||
        !data["Falta de conhecimento sobre o autocuidado com as mamas"] ||
        !data["Falta de conhecimento sobre os cuidados com recém-nascido"] ||
        !data["Falta de conhecimento sobre o planejamento familiar"] ||
        !data["Comunicação verbal prejudicada"] ||
        !data["Ansiedade"] ||
        !data["Atitude familiar conflitante"] ||
        !data["Maternidade/paternidade prejudicada"] ||
        !data["Risco de maternidade/paternidade prejudicada"] ||
        !data["Risco de vínculo mãe-filho prejudicado"]
      ) {
        Alert.alert(
          "Preencha todos os campos",
          "Todos os campos são obrigatórios!"
        );
        setLoading(false);
        return;
      }

      if (user) {
        await addAnswers(user.id, patientId, answeredQuestions);
        navigation.navigate("SpiritualNeeds", { patientId });
      }
    } catch (error) {
      Alert.alert("Ops", error.message);
    }
  };

  return (
    <>
      {!isKeyboardShown && (
        <DateHeader
          title="Necessidades Psicossociais"
          destinyBack="NewPuerperal"
        />
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
              <Text fontSize="lg" bold mb={4}>
                Gregária
              </Text>
              <Controller
                control={control}
                name={"Estado civil"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Casada" },
                      { description: "Solteira" },
                      { description: "União estável" },
                      { description: "Divorciada" },
                    ]}
                    placeholder={"Estado civil"}
                    onValueChange={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name="Falta de apoio social"
                render={({ field: { onChange } }) => (
                  <CommonInput
                    placeholder={"Falta de apoio social"}
                    returnKeyType="next"
                    onChangeText={onChange}
                  />
                )}
              />
              <Text fontSize="lg" bold mb={4}>
                Educação para a saúde/aprendizagem
              </Text>
              <Controller
                control={control}
                name={"Escolaridade"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Não alfabetizada" },
                      { description: "Ensino fundamental incompleto" },
                      { description: "Ensino fundamental completo" },
                      { description: "Ensino médio incompleto" },
                      { description: "Ensino médio completo" },
                      { description: "Ensino superior incompleto" },
                      { description: "Ensino superior completo" },
                    ]}
                    placeholder={"Escolaridade"}
                    onValueChange={onChange}
                  />
                )}
              />
              <Text fontSize="lg" bold mb={4}>
                Falta de conhecimento sobre
              </Text>
              <Controller
                control={control}
                name={"Falta de conhecimento sobre a amamentação"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Presente" },
                      { description: "Ausente" },
                    ]}
                    placeholder={"Amamentação"}
                    onValueChange={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name={"Falta de conhecimento sobre a ordenha do leite materno"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Presente" },
                      { description: "Ausente" },
                    ]}
                    placeholder={"Ordenha do leite materno"}
                    onValueChange={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name={
                  "Falta de conhecimento sobre a situação clínica do recém-nascido"
                }
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Presente" },
                      { description: "Ausente" },
                    ]}
                    placeholder={"Situação clínica do recém-nascido"}
                    onValueChange={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name={
                  "Falta de conhecimento sobre o autocuidado com a ferida cirúrgica"
                }
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Presente" },
                      { description: "Ausente" },
                    ]}
                    placeholder={"Autocuidado com a ferida cirúrgica"}
                    onValueChange={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name={"Falta de conhecimento sobre o autocuidado com as mamas"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Presente" },
                      { description: "Ausente" },
                    ]}
                    placeholder={"Autocuidado com as mamas"}
                    onValueChange={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name={
                  "Falta de conhecimento sobre os cuidados com recém-nascido"
                }
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Presente" },
                      { description: "Ausente" },
                    ]}
                    placeholder={"Cuidados com recém-nascido"}
                    onValueChange={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name={"Falta de conhecimento sobre o planejamento familiar"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Presente" },
                      { description: "Ausente" },
                    ]}
                    placeholder={"Planejamento familiar"}
                    onValueChange={onChange}
                  />
                )}
              />
              <Text fontSize="lg" bold mb={4}>
                Comunicação
              </Text>
              <Controller
                control={control}
                name="Comunicação verbal prejudicada"
                render={({ field: { onChange } }) => (
                  <CommonInput
                    placeholder={"Comunicação verbal prejudicada"}
                    returnKeyType="next"
                    onChangeText={onChange}
                  />
                )}
              />
              <Text fontSize="lg" bold mb={4}>
                Saúde emocional
              </Text>
              <Controller
                control={control}
                name={"Ansiedade"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Ausente" },
                      { description: "Leve" },
                      { description: "Moderada" },
                      { description: "Grave" },
                    ]}
                    placeholder={"Ansiedade"}
                    onValueChange={onChange}
                  />
                )}
              />
              <Text fontSize="lg" bold mb={4}>
                Amor, aceitação e autorealização
              </Text>
              <Controller
                control={control}
                name="Atitude familiar conflitante"
                render={({ field: { onChange } }) => (
                  <CommonInput
                    placeholder={"Atitude familiar conflitante"}
                    returnKeyType="next"
                    onChangeText={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name={"Maternidade/paternidade prejudicada"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Presente" },
                      { description: "Ausente" },
                    ]}
                    placeholder={"Maternidade/paternidade prejudicada"}
                    onValueChange={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name={"Risco de maternidade/paternidade prejudicada"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Aumentado" },
                      { description: "Diminuído" },
                      { description: "Ausente" },
                    ]}
                    placeholder={"Risco de maternidade/paternidade prejudicada"}
                    onValueChange={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name={"Risco de vínculo mãe-filho prejudicado"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Aumentado" },
                      { description: "Diminuído" },
                      { description: "Ausente" },
                    ]}
                    placeholder={"Risco de vínculo mãe-filho prejudicado"}
                    onValueChange={onChange}
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

export default index;
