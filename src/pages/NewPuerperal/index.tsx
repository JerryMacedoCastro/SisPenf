import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./styles";
import { globalStyles } from "../../Assets/GlobalStyles";
import CommonInput from "../../components/CommonInput";
import DateHeader from "../../components/DateHeader";
import PickerInfirmary from "../../components/Picker";
import useKeyboardControll from "../../hooks/useKeyboardControll";
import { infirmaries, hospitalBeds } from "../../data";
import { keyValue } from "../../interfaces";
import { useNavigation } from "@react-navigation/native";
import Gradient from "../../components/Gradient";

const NewPuerperal = (): JSX.Element => {
  const [infirmary, setInfirmary] = useState({} as keyValue);
  const [hospitalBed, setHospitalBed] = useState({} as keyValue);
  const isKeyboardShown = useKeyboardControll();
  const navigation = useNavigation();

  const handleCancel = () => {
    navigation.navigate("Home");
  };
  const handleStartProcess = () => {
    navigation.navigate("PsychologicalNeeds");
  };
  return (
    <>
      {!isKeyboardShown && <DateHeader title="Admitir puérpera" />}
      <SafeAreaView style={styles.container}>
        <Gradient />
        <View style={styles.buttonsContainer}>
          <PickerInfirmary
            placeholder="Selecione a enfermaria"
            items={infirmaries}
            handleChange={(item) => setInfirmary(item)}
          />
          <PickerInfirmary
            placeholder="Selecione o leito"
            items={hospitalBeds}
            handleChange={(item) => setHospitalBed(item)}
          />
        </View>

        <KeyboardAvoidingView
          style={styles.content}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={0}
        >
          <ScrollView
            contentContainerStyle={{
              position: "relative",
            }}
          >
            <View style={styles.formContainer}>
              <CommonInput title="Diagnótico médico" returnKeyType="next" />
              <CommonInput title="Dieta prescrita" returnKeyType="next" />
              <CommonInput title="Nome" returnKeyType="next" />
              <CommonInput title="Idade" keyboardType="twitter" />
              <CommonInput title="Estado civil" returnKeyType="next" />
              <CommonInput title="Escolaridade" returnKeyType="next" />
              <CommonInput title="Ocupação" returnKeyType="go" />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>

        {!isKeyboardShown && (
          <View style={styles.confirmButtonsContainer}>
            <RectButton
              style={[globalStyles.button, globalStyles.primaryButton]}
              onPress={handleStartProcess}
            >
              <Text style={globalStyles.primaryButtonText}>
                Iniciar processo de enfermagem
              </Text>
            </RectButton>
            <RectButton
              style={[globalStyles.button, globalStyles.secondaryButton]}
              onPress={handleCancel}
            >
              <Text style={globalStyles.secondaryButtonText}>Cancelar </Text>
            </RectButton>
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

export default NewPuerperal;
