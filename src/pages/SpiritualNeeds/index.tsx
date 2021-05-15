import React from "react";
import { View, Text, Platform, KeyboardAvoidingView } from "react-native";

import { styles } from "./styles";
import CommonInput from "../../components/CommonInput";
import DateHeader from "../../components/DateHeader";
import Gradient from "../../components/Gradient";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { globalStyles } from "../../Assets/GlobalStyles";
import useKeyboardControll from "../../hooks/useKeyboardControll";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const index = (): JSX.Element => {
  const navigation = useNavigation();
  const isKeyboardShown = useKeyboardControll();
  const handleContinue = () => {
    navigation.navigate("");
  };

  return (
    <>
      {!isKeyboardShown && (
        <DateHeader
          title="Necessidades Psicológicas"
          destinyBack="PsychologicalNeeds"
        />
      )}
      <SafeAreaView style={styles.container}>
        <Gradient />
        <KeyboardAvoidingView
          style={styles.content}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={0}
        >
          <ScrollView
            contentContainerStyle={{
              position: "relative",
            }}
          >
            <View style={styles.formContainer}>
              <CommonInput title="Prática religiosa" returnKeyType="next" />
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
