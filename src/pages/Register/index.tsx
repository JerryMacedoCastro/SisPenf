import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
import { RectButton, TextInput } from "react-native-gesture-handler";

import { styles } from "./styles";
import Gradient from "../../components/Gradient";
import Header from "../../components/Header";

const Register = (): JSX.Element => {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [role, setRole] = useState("");
  const [registerNumber, setRegisterNumber] = useState("");

  const handleSubmit = () => {
    Alert.alert("Not Implemented", `${name} ${cpf} ${role} ${registerNumber}`);
  };
  return (
    <>
      <View style={styles.container}>
        <Gradient />
        <Header title="Solicitar Acesso" goBackOption={true} />

        <Text style={styles.subTitle}>SisPenf</Text>
        <TextInput
          autoFocus
          id="nome"
          placeholder="Nome"
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <TextInput
          id="cargo"
          placeholder="Cargo"
          style={styles.input}
          value={role}
          onChangeText={(text) => setRole(text)}
        />
        <TextInput
          id="cpf"
          placeholder="CPF (Somente números)"
          style={styles.input}
          value={cpf}
          keyboardType="numeric"
          onChangeText={(text) => setCpf(text)}
        />
        <TextInput
          id="registro"
          placeholder="Numero do registro"
          keyboardType="numeric"
          style={styles.input}
          value={registerNumber}
          onChangeText={(text) => setRegisterNumber(text)}
        />
        <RectButton
          style={[styles.button, styles.primaryButton]}
          onPress={handleSubmit}
        >
          <Text style={styles.primaryButtonText}>Enviar</Text>
        </RectButton>
      </View>
    </>
  );
};

export default Register;
