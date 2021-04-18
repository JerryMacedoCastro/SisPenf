// eslint-disable-next-line no-use-before-define
import React, { useRef, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { RectButton, TextInput } from "react-native-gesture-handler";
import DateHeader from "../components/DateHeader";
import Gradient from "../components/Gradient";
import Separator from "../components/Separator";
import useKeyboardControll from "../hooks/useKeyboardControll";
import PickerInfirmary from "../components/Picker";
import { globalStyles } from "../Assets/GlobalStyles";
import { hospitalBeds, infirmaries } from "../data";

const FindPatient = (): JSX.Element => {
  const isKeyboardShown = useKeyboardControll();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchPatient, setSearchPatient] = useState("");
  const handleChangeInput = () => {
    console.log("");
  };

  // <TextInput> or others dont work here
  // forced to use <any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const searchInput = useRef<any>(null);
  const handleSearchPress = () => {
    if (searchInput && searchInput.current) {
      searchInput.current.focus();
    }
  };

  return (
    <View style={styles.container}>
      <Gradient />
      <DateHeader title="Buscar Paciente" />
      <View>
        <Text style={styles.label}>Buscar paciente pelo nome</Text>
        <View style={styles.inputContainer}>
          <TextInput
            ref={searchInput}
            placeholder={"Digite o nome do paciente"}
            style={styles.input}
            value={searchPatient}
            onChange={handleChangeInput}
          />
          <Feather
            name={"search"}
            color={"#34615C"}
            size={24}
            onPress={handleSearchPress}
          />
        </View>
      </View>
      {!isKeyboardShown && (
        <>
          <View style={{ paddingVertical: "10%" }}>
            <Separator text="Ou" />
          </View>
          <View style={styles.pickerButtonsContainer}>
            <PickerInfirmary
              placeholder="Selecione a enfermaria"
              items={infirmaries}
            />
            <PickerInfirmary
              placeholder="Selecione o leito"
              items={hospitalBeds}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <RectButton
              style={[globalStyles.button, globalStyles.primaryButton]}
            >
              <Text style={globalStyles.primaryButtonText}>Buscar</Text>
            </RectButton>
            <RectButton
              style={[globalStyles.button, globalStyles.secondaryButton]}
            >
              <Text style={globalStyles.secondaryButtonText}>Cancelar</Text>
            </RectButton>
          </View>
        </>
      )}
    </View>
  );
};

export default FindPatient;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BCE0DC",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    top: 0,
    width: "100%",
    height: "100%",
    minHeight: "100%",
  },
  label: {
    color: "#34615C",
    alignSelf: "flex-start",
    marginLeft: 6,
    marginBottom: 4,
    fontSize: 16,
    fontFamily: "JosefinSans_700Bold",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    backgroundColor: "#fff",
    paddingHorizontal: 1,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#34615C",
  },
  input: {
    width: "80%",
    color: "#34615C",
  },
  pickerButtonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  buttonsContainer: {
    position: "absolute",
    width: "100%",

    alignItems: "center",
    bottom: 10,
  },
});
