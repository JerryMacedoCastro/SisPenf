import React from "react";
import { View, Text, Platform, KeyboardAvoidingView } from "react-native";

import { styles } from "./styles";
import CommonInput from "../../components/CommonInput";
import Gradient from "../../components/Gradient";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { globalStyles } from "../../Assets/GlobalStyles";
import useKeyboardControll from "../../hooks/useKeyboardControll";

const index = (): JSX.Element => {
  const isKeyboardShown = useKeyboardControll();
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Gradient />
      <View style={styles.content}>
        <ScrollView>
          <CommonInput title="Prática religiosa" returnKeyType="next" />
        </ScrollView>
      </View>

      {!isKeyboardShown && (
        <View style={styles.confirmButtonsContainer}>
          <RectButton style={[globalStyles.button, globalStyles.primaryButton]}>
            <Text style={globalStyles.primaryButtonText}>Continuar</Text>
          </RectButton>
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

export default index;
