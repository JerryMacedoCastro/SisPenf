import React from "react";
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { styles } from "./styles";
import { globalStyles } from "../../Assets/GlobalStyles";
import CommonInput from "../../components/CommonInput";
import DateHeader from "../../components/DateHeader";
import PickerInfirmary from "../../components/Picker";
import useKeyboardControll from "../../hooks/useKeyboardControll";
import { infirmaries, hospitalBeds } from "../../data";

const NewPuerperal = (): JSX.Element => {
  const isKeyboardShown = useKeyboardControll();

  return (
    <>
      <View style={styles.container}>
        <DateHeader title="Admitir puérpera" />

        <View style={styles.buttonsContainer}>
          <PickerInfirmary
            placeholder="Selecione a enfermaria"
            items={infirmaries}
          />
          <PickerInfirmary
            placeholder="Selecione o leito"
            items={hospitalBeds}
          />
        </View>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
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
            >
              <Text style={globalStyles.secondaryButtonText}>Cancelar</Text>
            </RectButton>
          </View>
        )}
      </View>
    </>
  );
};

export default NewPuerperal;