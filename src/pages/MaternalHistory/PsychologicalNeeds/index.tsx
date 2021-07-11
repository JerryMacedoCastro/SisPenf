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
import { Form } from '@unform/mobile';
import { FormHandles, SubmitHandler } from "@unform/core";


import { styles } from "../styles";
import CommonInput from "../../../components/CommonInput";
import DateHeader from "../../../components/DateHeader";
import Gradient from "../../../components/Gradient";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { globalStyles } from "../../../Assets/GlobalStyles";
import useKeyboardControll from "../../../hooks/useKeyboardControll";
import { RootStackParamList } from "../../../Routes/app.routes";

type Props = StackScreenProps<RootStackParamList, "PsychologicalNeeds">;
const index = ({ route }: Props): JSX.Element => {
  const { infirmary, hospitalBed } = route.params;
  const navigation = useNavigation();
  const isKeyboardShown = useKeyboardControll();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler = async (formData) => {
    console.log(formData);
    //navigation.navigate("SpiritualNeeds");
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

                <CommonInput name="financialSituation" placeholder="Situação Financeira" returnKeyType="next" />
                <CommonInput name="comunicationProblem"
                  placeholder="Dificuldade de comunicação"
                  returnKeyType="go"
                />
                <CommonInput name="familySuport" placeholder="Apoio familiar" returnKeyType="go" />
                <CommonInput name="domesticAbuse" placeholder="Violência doméstica" returnKeyType="go" />
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
