import React from "react";
import { Text, View } from "react-native";
import { RectButton, TextInput } from "react-native-gesture-handler";

import { styles } from "./styles";
import Gradient from "../../components/Gradient";
import Header from "../../components/Header";
import { globalStyles } from "../../Assets/GlobalStyles";

const PasswordRecover = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Gradient />
      <Header title="Recuperar Senha" goBackOption={true} />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          autoCorrect={false}
          placeholder={"Email"}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          autoCorrect={false}
          placeholder={"CPF"}
          keyboardType="numeric"
        />
      </View>

      <RectButton
        onPress={() => {
          alert("Warning");
        }}
        style={[globalStyles.button, globalStyles.primaryButton]}
      >
        <Text style={globalStyles.primaryButtonText}>Recuperar senha</Text>
      </RectButton>
    </View>
  );
};

export default PasswordRecover;
