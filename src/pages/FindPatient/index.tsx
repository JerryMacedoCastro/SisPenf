import React, { useRef, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
import { RectButton, TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";

import DateHeader from "../../components/DateHeader";
import Gradient from "../../components/Gradient";
import Separator from "../../components/Separator";
import PickerInfirmary from "../../components/Picker";
import PatiensList from "../../components/PatientsList";
import useKeyboardControll from "../../hooks/useKeyboardControll";
import { globalStyles } from "../../Assets/GlobalStyles";
import { hospitalBeds, infirmaries } from "../../data";

const FindPatient = (): JSX.Element => {
  const isKeyboardShown = useKeyboardControll();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchPatient, setSearchPatient] = useState("");
  const handleChangeInput = (value: string) => {
    setSearchPatient(value);
  };

  //  <TextInput> or others dont work here
  //  forced to use <any>
  //  eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      <KeyboardAvoidingView
        style={styles.searchContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Text style={styles.label}>Buscar paciente pelo nome</Text>
        <View style={styles.inputContainer}>
          <TextInput
            ref={searchInput}
            placeholder={"Digite o nome do paciente"}
            style={styles.input}
            value={searchPatient}
            onChangeText={handleChangeInput}
          />
          <Feather
            name={"search"}
            color={"#34615C"}
            size={24}
            onPress={handleSearchPress}
          />
        </View>
        {!!searchPatient && <PatiensList search={searchPatient} />}
      </KeyboardAvoidingView>

      {!isKeyboardShown && !searchPatient && (
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
