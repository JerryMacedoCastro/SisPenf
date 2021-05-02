import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { styles } from "./styles";
import { globalStyles } from "../../Assets/GlobalStyles";
import CommonInput from "../../components/CommonInput";
import DateHeader from "../../components/DateHeader";
import PickerInfirmary from "../../components/Picker";
import useKeyboardControll from "../../hooks/useKeyboardControll";
import { infirmaries, hospitalBeds } from "../../data";
import { keyValue } from "../../interfaces";
import { useNavigation } from "@react-navigation/native";

const NewPuerperal = (): JSX.Element => {
  const [infirmary, setInfirmary] = useState({} as keyValue);
  const [hospitalBed, setHospitalBed] = useState({} as keyValue);
  const isKeyboardShown = useKeyboardControll();
  const navigation = useNavigation();

  const handleCancel = () => {
    navigation.navigate("Home");
  };
  return (
    <>
      <View style={styles.container}>
        <DateHeader title="Admitir puérpera" />

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
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "padding"}
        >
          <ScrollView
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <View style={styles.content}>
              <CommonInput title="Diagnótico médico" returnKeyType="next" />
              <CommonInput title="Dieta prescrita" returnKeyType="next" />
              <CommonInput title="Nome" returnKeyType="next" />
              <CommonInput title="Idade" keyboardType="numeric" />
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
      </View>
    </>
  );
};

export default NewPuerperal;
