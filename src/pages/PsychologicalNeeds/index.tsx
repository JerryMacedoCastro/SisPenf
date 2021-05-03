import React from "react";
import { View, Text, Platform, KeyboardAvoidingView } from "react-native";

import { styles } from "./styles";
import CommonInput from "../../components/CommonInput";
import Gradient from "../../components/Gradient";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { globalStyles } from "../../Assets/GlobalStyles";
import useKeyboardControll from "../../hooks/useKeyboardControll";
import { SafeAreaView } from "react-native-safe-area-context";

const index = (): JSX.Element => {
  const isKeyboardShown = useKeyboardControll();
  return (
    <SafeAreaView style={styles.container}>
      <Gradient />
      <KeyboardAvoidingView
        style={[styles.content, isKeyboardShown ? styles.inputContainer : null]}
        behavior={Platform.OS === "ios" ? "padding" : "padding"}
      >
        <ScrollView>
          <CommonInput title="Nome" returnKeyType="next" />
          <CommonInput title="Idade" returnKeyType="next" />
          <CommonInput title="Etado Civil" returnKeyType="next" />
          <CommonInput title="Escolaridade" keyboardType="numeric" />
          <CommonInput title="Ocupação" returnKeyType="next" />
          <CommonInput title="Situação Financeira" returnKeyType="next" />
          <CommonInput title="Dificuldade de comunicação" returnKeyType="go" />
          <CommonInput title="Apoio familiar" returnKeyType="go" />
          <CommonInput title="Violência doméstica" returnKeyType="go" />
        </ScrollView>
      </KeyboardAvoidingView>

      {!isKeyboardShown && (
        <View style={styles.confirmButtonsContainer}>
          <RectButton style={[globalStyles.button, globalStyles.primaryButton]}>
            <Text style={globalStyles.primaryButtonText}>Continuar</Text>
          </RectButton>
        </View>
      )}
    </SafeAreaView>
  );
};

export default index;
