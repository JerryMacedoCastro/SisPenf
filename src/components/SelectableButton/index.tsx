import React from "react";
import { Feather } from "@expo/vector-icons";
import { Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { styles } from "./styles";
import { globalStyles } from "../../Assets/GlobalStyles";

interface ButtonProps {
  title: string;

  handlePress?: () => void;
}

const index = (props: ButtonProps): JSX.Element => {
  const { title, handlePress } = props;
  const defaultColor = "#fff";
  return (
    <RectButton
      style={[styles.button, globalStyles.primaryButton]}
      onPress={handlePress}
    >
      <Text style={globalStyles.primaryButtonText}>{title}</Text>
      <Feather name={"check-square"} color={defaultColor} size={16} />
    </RectButton>
  );
};

export default index;
