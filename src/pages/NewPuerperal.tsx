import React from "react";
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { globalStyles } from "../Assets/GlobalStyles";
import CommonInput from "../components/CommonInput";
import DateHeader from "../components/DateHeader";
import PickerInfirmary from "../components/Picker";


const NewPuerperal = () => {

  const infirmaries = [
    { label: "Enfermaria 01", value: 1 },
    { label: "Enfermaria 02", value: 2 },
    { label: "Enfermaria 03", value: 3 },
    { label: "Enfermaria 04", value: 4 },
  ]

  const hospitalBeds = [
    { label: "Leito 01", value: 1 },
    { label: "Leito 02", value: 2 },
    { label: "Leito 03", value: 3 },
    { label: "Leito 04", value: 4 },
    { label: "Leito 05", value: 4 },
    { label: "Leito 333", value: 4 },
    { label: "Leito 1234", value: 4 },
    { label: "Leito 34344", value: 4 },
    { label: "Leito 4444", value: 4 },
    { label: "Leito 00", value: 4 },
  ]

  return (
    <>

      <View style={styles.container}  >
        <DateHeader title="Admitir puérpera" />

        <View style={styles.buttonsContainer}>
          <PickerInfirmary placeholder="Selecione a enfermaria" items={infirmaries} />
          <PickerInfirmary placeholder="Selecione o leito" items={hospitalBeds} />
        </View>
        <KeyboardAvoidingView style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"} >

          <ScrollView

            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
              position: 'relative',


            }}
          >
            <View style={styles.content}>
              <CommonInput title="Diagnótico médico" />
              <CommonInput title="Dieta prescrita" />
              <CommonInput title="Nome" />
              <CommonInput title="Idade" keyboardNumeric />
              <CommonInput title="Estado civil" />
              <CommonInput title="Escolaridade" />
              <CommonInput title="Ocupação" />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>

        <View style={styles.confirmButtonsContainer}  >
          <RectButton style={[globalStyles.button, globalStyles.primaryButton]}>
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
    flex: 1

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

    backgroundColor: '#fff',
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

    width: "100%",
    alignItems: "center",
    marginBottom: 10,
    bottom: 0

  },
});
