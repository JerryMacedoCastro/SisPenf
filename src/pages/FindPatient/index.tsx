import React, { useRef, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";

import DateHeader from "../../components/DateHeader";
import Gradient from "../../components/Gradient";
import PatiensList from "../../components/PatientsList";
import useKeyboardControll from "../../hooks/useKeyboardControll";
import { colors } from "../../Assets/GlobalStyles";

const FindPatient = (): JSX.Element => {
  const isKeyboardShown = useKeyboardControll();
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
      {!isKeyboardShown && <DateHeader title="Buscar Paciente" />}
      <View style={styles.content}>
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
              color={colors.darkGreen}
              size={24}
              onPress={handleSearchPress}
            />
          </View>
          {!!searchPatient && <PatiensList search={searchPatient} />}
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default FindPatient;
