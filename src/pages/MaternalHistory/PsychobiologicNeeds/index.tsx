import React, { useRef } from "react";
import {
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { Form } from "@unform/mobile";
import { FormHandles, SubmitHandler } from "@unform/core";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RectButton, ScrollView } from "react-native-gesture-handler";

import { styles } from "../styles";
import CommonInput from "../../../components/Input/CommonInput";
import DateHeader from "../../../components/DateHeader";
import Gradient from "../../../components/Gradient";
import { globalStyles } from "../../../Assets/GlobalStyles";
import useKeyboardControll from "../../../hooks/useKeyboardControll";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../Routes/app.routes";
import { IQuestionAnswer } from "../../../interfaces";
import { addAnswers } from "../../../services/answer.service";
import { useAuth } from "../../../contexts/auth";

type Props = StackScreenProps<RootStackParamList, "PsychologicalNeeds">;

interface IPsychobiologicNeeds {
  gestate: string;
  to: string;
  abortion: string;
  kidsNumber: string;
  risc: string;
  gestationProblems: string;
  diseases: string;
  allergies: string;
}

const index = ({ route }: Props): JSX.Element => {
  const { patientId } = route.params;
  const { user } = useAuth();
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const isKeyboardShown = useKeyboardControll();
  const handleSubmit: SubmitHandler<IPsychobiologicNeeds> = async (
    formData
  ) => {
    const {
      abortion,
      to,
      gestate,
      kidsNumber,
      risc,
      gestationProblems,
      diseases,
      allergies,
    } = formData;
    try {
      const questions: IQuestionAnswer[] = [
        { question: "Gesta", answer: abortion },
        { question: "Para", answer: to },
        { question: "Aborto", answer: gestate },
        { question: "Número de filhos", answer: kidsNumber },
        { question: "Risco", answer: risc },
        { question: "Intercorrências na gestação", answer: gestationProblems },
        { question: "Doenças associadas", answer: diseases },
        { question: "Alergias", answer: allergies },
      ];
      if (user) {
        await addAnswers(user.id, patientId, questions);

        navigation.navigate("ChildbirthData", { patientId });
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <>
      {!isKeyboardShown && (
        <DateHeader
          title="Necessidades Psicobiológicas"
          destinyBack="SpiritualNeeds"
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
                <CommonInput name="gestate" placeholder="Gesta" />
                <CommonInput name="to" placeholder="Para" />
                <CommonInput name="abortion" placeholder="Aborto" />
                <CommonInput
                  name="kidsNumber"
                  placeholder="Número de filhos"
                  keyboardType="decimal-pad"
                />
                <CommonInput name="risc" placeholder="Risco" />
                <CommonInput
                  name="gestationProblems"
                  placeholder="Intercorrências na gestação"
                />
                <CommonInput name="diseases" placeholder="Doenças associadas" />
                <CommonInput
                  name="allergies"
                  placeholder="Alergias"
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
