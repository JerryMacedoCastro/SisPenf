import React, { useRef, useState } from "react";
import { Alert, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Form } from "@unform/mobile";
import { SubmitHandler, FormHandles } from "@unform/core";
// import api from "../../services/api";

import { styles } from "./styles";
import Gradient from "../../components/Gradient";
import { globalStyles } from "../../Assets/GlobalStyles";
import Header from "../../components/Header";
import SquareInput from "../../components/SquareInput";
import { useAuth } from "../../contexts/auth";

interface FormData {
  user: string;
  password: string;
}

const Login = (): JSX.Element => {
  const { signIn } = useAuth();
  const [loading, setLoading] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const handleFormSubmit: SubmitHandler<FormData> = async (info) => {
    try {
      setLoading(true);
      const { user, password } = info;
      if (!user || !password) throw new Error();
      await signIn(user, password).finally(() => {
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
      Alert.alert(
        "Dados inválidos",
        "Cheque os dados ou entre em contato com os resposáveis"
      );
    }
  };

  const handleRequestAccess = () => {
    Alert.alert(
      "Ops",
      "Estamos trabalhando nisso. Procure um administrador do sistema para receber os dados de acesso"
    );
  };

  return (
    <View style={styles.container}>
      <Gradient />
      <Header />
      <Text style={styles.subTitle}>SisPenf</Text>
      {loading && <Text>Carregando...</Text>}
      {!loading && (
        <Form
          ref={formRef}
          onSubmit={handleFormSubmit}
          style={{ display: "flex", width: "100%", alignItems: "center" }}
        >
          <SquareInput
            name="user"
            placeholder="E-mail"
            icon="user"
            autoCorrect={false}
          />
          <SquareInput
            name="password"
            placeholder="Senha"
            icon="lock"
            autoCorrect={false}
            secureTextEntry
          />
          {/* {error !== "" && <TextInput style={styles.error}>{error}</TextInput>} */}
          {/* <RectButton style={{ height: 26, marginBottom: 20, marginTop: 20 }}>
            <Text
              onPress={() => navigation.navigate("PasswordRecover")}
              style={styles.inputStyle}
            >
              Esqueceu a senha? Clique aqui.
            </Text>
          </RectButton> */}

          <RectButton
            onPress={() => formRef?.current?.submitForm()}
            style={[globalStyles.button, globalStyles.primaryButton]}
          >
            <Text style={globalStyles.primaryButtonText}>Acessar</Text>
          </RectButton>
          <RectButton
            style={[globalStyles.button, globalStyles.secondaryButton]}
            onPress={handleRequestAccess}
          >
            <Text style={globalStyles.secondaryButtonText}>
              Solicitar Acesso
            </Text>
          </RectButton>
        </Form>
      )}
    </View>
  );
};

export default Login;
