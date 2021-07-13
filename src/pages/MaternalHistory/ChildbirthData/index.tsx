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
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { Form } from "@unform/mobile";
import { FormHandles, SubmitHandler } from "@unform/core";

import { IQuestionAnswer } from "../../../interfaces";
import useAnswerPost from "../../../hooks/useAnswerPost";
import { useAuth } from "../../../contexts/auth";
import { styles } from "../styles";
import CommonInput from "../../../components/CommonInput";
import DateHeader from "../../../components/DateHeader";
import Gradient from "../../../components/Gradient";
import { globalStyles } from "../../../Assets/GlobalStyles";
import useKeyboardControll from "../../../hooks/useKeyboardControll";
import { RootStackParamList } from "../../../Routes/app.routes";

type Props = StackScreenProps<RootStackParamList, "ChildbirthData">;

interface IChildbirthData {
  gestate: string;
  type: string;
  indication: string;
  rpmo: string;

  information: string;
}

const index = ({ route }: Props): JSX.Element => {
  const { patientId } = route.params;
  const { user } = useAuth();
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();
  const isKeyboardShown = useKeyboardControll();

  const handleSubmit: SubmitHandler<IChildbirthData> = async (formData) => {
    try {
      const { gestate, type, indication, rpmo } = formData;
      const questions: IQuestionAnswer[] = [
        {
          question: "Gestação",
          answer: gestate,
        },
        {
          question: "Tipo de parto",
          answer: type,
        },
        {
          question: "Indicação",
          answer: indication,
        },
        {
          question: "RPMO",
          answer: rpmo,
        },
      ];
      if (user) {
        const isCreatedAnswer = await useAnswerPost(
          user.id,
          patientId,
          questions
        );
        if (isCreatedAnswer) navigation.navigate("PartOne");
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <>
      {!isKeyboardShown && (
        <DateHeader title="Dados do Parto" destinyBack="PsychobiologicNeeds" />
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
              {/* <CommonInput name="date" placeholder="Data" />
              <CommonInput name="time" placeholder="Hora" /> */}
              {/* <CommonInput name="" placeholder="Tempo de BR até o parto" /> */}
              <Form ref={formRef} onSubmit={handleSubmit}>
                <CommonInput name="gestate" placeholder="Gestação" />
                <CommonInput name="type" placeholder="Tipo de parto" />
                <CommonInput name="indication" placeholder="Indicação" />
                <CommonInput name="rpmo" placeholder="RPMO" />
                <CommonInput
                  name="information"
                  placeholder="Informações adcionais"
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
