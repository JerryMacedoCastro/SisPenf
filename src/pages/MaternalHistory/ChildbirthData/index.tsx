import React from "react";
import { View, Text, Platform, KeyboardAvoidingView } from "react-native";

import { styles } from "../styles";
import CommonInput from "../../../components/CommonInput";
import DateHeader from "../../../components/DateHeader";
import Gradient from "../../../components/Gradient";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { globalStyles } from "../../../Assets/GlobalStyles";
import useKeyboardControll from "../../../hooks/useKeyboardControll";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const index = (): JSX.Element => {
  const navigation = useNavigation();
  const isKeyboardShown = useKeyboardControll();
  const handleContinue = () => {
    navigation.navigate("PartOne");
  };

  return (
    <>
      {!isKeyboardShown && (
        <DateHeader title="Dados do Parto" destinyBack="PsychobiologicNeeds" />
      )}
      <SafeAreaView style={styles.container}>
        <Gradient />
        <KeyboardAvoidingView
          style={styles.content}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={50}
        >
          <ScrollView
            contentContainerStyle={{
              position: "relative",
            }}
          >
            <View style={styles.formContainer}>
              <CommonInput title="Data" />
              <CommonInput title="Hora" />
              <CommonInput title="Gestação" />
              <CommonInput title="Tipo de parto" />
              <CommonInput title="Indicação" />
              <CommonInput title="RPMO" />
              <CommonInput title="Tempo de BR até o parto" />
              <CommonInput title="Informações adcionais" returnKeyType="go" />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>

        {!isKeyboardShown && (
          <View style={styles.confirmButtonsContainer}>
            <RectButton
              style={[globalStyles.button, globalStyles.primaryButton]}
              onPress={handleContinue}
            >
              <Text style={globalStyles.primaryButtonText}>Continuar</Text>
            </RectButton>
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

export default index;
