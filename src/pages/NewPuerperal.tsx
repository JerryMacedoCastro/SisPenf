// eslint-disable-next-line no-use-before-define
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { globalStyles } from "../Assets/GlobalStyles";
import CommonInput from "../components/CommonInput";
import DateHeader from "../components/DateHeader";
import PickerInfirmary from "../components/Picker";
import useKeyboardControll from "../hooks/useKeyboardControll";
import { infirmaries, hospitalBeds } from "../data";

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

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#BCE0DC",
    width: "100%",
    height: "100%",
    flex: 1,
  },

  button: {
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 42,
    marginTop: 10,
    width: "45%",
    fontFamily: "JosefinSans_700Bold",
    padding: 16,
  },

  content: {
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 20,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    opacity: 1,
    width: "100%",
    padding: 16,
    marginTop: 100,
  },
  confirmButtonsContainer: {
    flex: 0,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
    bottom: 0,
  },
});
