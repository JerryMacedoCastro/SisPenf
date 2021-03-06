import React, { useRef } from "react";
import { View, Text, Platform, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { Form } from "@unform/mobile";
import { FormHandles, SubmitHandler } from "@unform/core";

import { styles } from "../styles";
import CommonInput from "../../../components/CommonInput";
import DateHeader from "../../../components/DateHeader";
import Gradient from "../../../components/Gradient";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { globalStyles } from "../../../Assets/GlobalStyles";
import useKeyboardControll from "../../../hooks/useKeyboardControll";
import { RootStackParamList } from "../../../Routes/app.routes";
import { IQuestionAnswer } from "../../../interfaces";
import useAnswerPost from "../../../hooks/useAnswerPost";
import { useAuth } from "../../../contexts/auth";

type Props = StackScreenProps<RootStackParamList, "PsychologicalNeeds">;

interface IPsycologicalNeeds {
  financialSituation: string;
  comunicationProblem: string;
  famillySuport: string;
  domesticAbuse: string;
}

const index = ({ route }: Props): JSX.Element => {
  const { user } = useAuth();
  const { patientId } = route.params;
  const navigation = useNavigation();
  const isKeyboardShown = useKeyboardControll();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<IPsycologicalNeeds> = async (formData) => {
    const {
      comunicationProblem,
      financialSituation,
      famillySuport,
      domesticAbuse,
    } = formData;
    const questions: IQuestionAnswer[] = [
      {
        question: "Situação Financeira",
        answer: financialSituation,
      },
      {
        question: "Dificuldade de Comunicação",
        answer: comunicationProblem,
      },
      {
        question: "Apoio Familiar",
        answer: famillySuport,
      },
      {
        question: "Violência Domestica",
        answer: domesticAbuse,
      },
    ];
    if (user) {
      const isAnswersCreated = useAnswerPost(
        user.id,
        patientId || 0,
        questions
      );

      if (isAnswersCreated)
        navigation.navigate("SpiritualNeeds", { patientId });
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
              <Form ref={formRef} onSubmit={handleSubmit}>
                <CommonInput
                  name="financialSituation"
                  placeholder="Situação Financeira"
                  returnKeyType="next"
                />
                <CommonInput
                  name="comunicationProblem"
                  placeholder="Dificuldade de comunicação"
                  returnKeyType="go"
                />
                <CommonInput
                  name="familySuport"
                  placeholder="Apoio familiar"
                  returnKeyType="go"
                />
                <CommonInput
                  name="domesticAbuse"
                  placeholder="Violência doméstica"
                  returnKeyType="go"
                />
              </Form>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>

        {!isKeyboardShown && (
          <View style={styles.confirmButtonsContainer}>
            <RectButton
              style={[globalStyles.button, globalStyles.primaryButton]}
              onPress={() => formRef?.current?.submitForm()}
            >
              <Text style={globalStyles.primaryButtonText}>Continuar</Text>
            </RectButton>
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

export default index;
