import React, { useState } from "react";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RectButton, TextInput } from "react-native-gesture-handler";

import { styles } from "./styles";
import Gradient from "../../components/Gradient";
import { colors, globalStyles } from "../../Assets/GlobalStyles";
import Header from "../../components/Header";

const Login = (): JSX.Element => {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleChangeUser = (text: string) => {
    setUser(text);
  };

  const handleChangePassword = (text: string) => {
    setPassword(text);
  };
  const handleNavigateToRegister = () => {
    navigation.navigate("Register");
  };
  return (
    <View style={styles.container}>
      <Gradient />
      <Header />

      <Text style={styles.subTitle}>SisPenf</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          autoCorrect={false}
          placeholder={"Usuário"}
          value={user}
          onChangeText={handleChangeUser}
          autoFocus
        />
        <Feather name="user" size={18} color={colors.ashenGreen} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          autoCorrect={false}
          secureTextEntry
          placeholder={"Senha"}
          value={password}
          onChangeText={handleChangePassword}
        />
        <Feather name="lock" size={18} color={colors.ashenGreen} />
      </View>
      <RectButton style={{ height: 26, marginBottom: 20, marginTop: 20 }}>
        <Text
          onPress={() => navigation.navigate("PasswordRecover")}
          style={styles.inputStyle}
        >
          Esqueceu a senha? Clique aqui.
        </Text>
      </RectButton>
      <RectButton
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={[globalStyles.button, globalStyles.primaryButton]}
      >
        <Text style={globalStyles.primaryButtonText}>Acessar</Text>
      </RectButton>
      <RectButton
        style={[globalStyles.button, globalStyles.secondaryButton]}
        onPress={handleNavigateToRegister}
      >
        <Text style={globalStyles.secondaryButtonText}>Solicitar Acesso</Text>
      </RectButton>
    </View>
  );
};

export default Login;
