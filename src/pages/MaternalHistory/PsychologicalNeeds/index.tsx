import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

import { styles } from "../styles";
import CommonInput from "../../../components/Input/CommonInput";
import DateHeader from "../../../components/DateHeader";
import Gradient from "../../../components/Gradient";
import { ScrollView } from "react-native-gesture-handler";
import { globalStyles } from "../../../Assets/GlobalStyles";
import useKeyboardControll from "../../../hooks/useKeyboardControll";
import { RootStackParamList } from "../../../Routes/app.routes";
import { IPsycologicalNeedsForm, IQuestionResponse } from "../../../interfaces";

import { useAuth } from "../../../contexts/auth";
import { getQuestionsByType } from "../../../services/question.service";
import { Controller, useForm } from "react-hook-form";
import PickerSelect from "../../../components/PickerSelect";
import { Button } from "native-base";
import { addAnswers } from "../../../services/answer.service";

type Props = StackScreenProps<RootStackParamList, "PsychologicalNeeds">;

const index = ({ route }: Props): JSX.Element => {
  const { user } = useAuth();
  const { patientId } = route.params;
  const navigation = useNavigation();
  const isKeyboardShown = useKeyboardControll();
  const [questions, setQuestions] = useState<IQuestionResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit } = useForm<IPsycologicalNeedsForm>();
  const questionsType = 2;

  async function fetchQuestionsData() {
    try {
      const questionsForm = await getQuestionsByType(questionsType);
      setQuestions(questionsForm);
    } catch (error) {
      throw new Error("Erro ao buscar dados", error.message);
    }
  }

  useEffect(() => {
    try {
      fetchQuestionsData();
    } catch (error) {
      Alert.alert("Ops", error.message);
    }
  }, []);

  const submitForm = async (data: IPsycologicalNeedsForm) => {
    try {
      setLoading(true);
      const answeredQuestions = [
        {
          question: "Situação Financeira",
          comment: data["Situação Financeira"],
        },
        {
          question: "Dificuldade de Comunicação",
          comment: data["Problema de Comunicação"],
        },
        {
          question: "Apoio Familiar",
          comment: data["Suporte Familiar"],
        },
        {
          question: "Violência Domestica",
          comment: data["Abuso Doméstico"],
        },
      ];

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
          title="Necessidades Psicológicas"
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
            <View style={styles.formContainer}>
              {questions.map((question): JSX.Element => {
                return question.options.length === 0 ? (
                  <Controller
                    key={question.id}
                    control={control}
                    name={question.description as keyof IPsycologicalNeedsForm}
                    render={({ field: { onChange } }) => (
                      <CommonInput
                        key={question.id}
                        placeholder={question.description}
                        returnKeyType="next"
                        onChangeText={onChange}
                      />
                    )}
                  />
                ) : (
                  <Controller
                    key={question.id}
                    control={control}
                    name={question.description as keyof IPsycologicalNeedsForm}
                    render={({ field: { onChange } }) => (
                      <PickerSelect
                        key={question.id}
                        options={question.options}
                        placeholder={question.description}
                        onValueChange={onChange}
                      />
                    )}
                  />
                );
              })}
            </View>
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
