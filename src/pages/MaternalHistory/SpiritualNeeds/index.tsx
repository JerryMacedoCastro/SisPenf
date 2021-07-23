import React, { useRef } from "react";
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
import { Form } from "@unform/mobile";
import { FormHandles, SubmitHandler } from "@unform/core";

import { IQuestionAnswer } from "../../../interfaces";
import useAnswerPost from "../../../hooks/useAnswerPost";
import { useAuth } from "../../../contexts/auth";
import { styles } from "../styles";
import CommonInput from "../../../components/CommonInput";
import DateHeader from "../../../components/DateHeader";
import Gradient from "../../../components/Gradient";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { globalStyles } from "../../../Assets/GlobalStyles";
import useKeyboardControll from "../../../hooks/useKeyboardControll";
import { RootStackParamList } from "../../../Routes/app.routes";

type Props = StackScreenProps<RootStackParamList, "SpiritualNeeds">;

interface ISpiritualNeeds {
  religion: string;
}

const index = ({ route }: Props): JSX.Element => {
  const { patientId } = route.params;
  const { user } = useAuth();
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();
  const isKeyboardShown = useKeyboardControll();
  const handleSubmit: SubmitHandler<ISpiritualNeeds> = async (formData) => {
    try {
      const { religion } = formData;
      const questions: IQuestionAnswer[] = [
        {
          question: "Prática religiosa",
          answer: religion,
        },
      ];
      if (user) {
        const isCreatedAnswer = useAnswerPost(
          user.id,
          patientId,
          questions
        ).then((value) => value);
        if (isCreatedAnswer)
          navigation.navigate("PsychobiologicNeeds", { patientId });
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <>
      {!isKeyboardShown && (
        <DateHeader
          title="Necessidades Psicoespirituais"
          destinyBack="PsychologicalNeeds"
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
                  name="religion"
                  placeholder="Prática religiosa"
                  returnKeyType="next"
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
