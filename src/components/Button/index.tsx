import React from "react";
import { Feather } from "@expo/vector-icons";
import { Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { styles } from "./styles";
import { globalStyles } from "../../Assets/GlobalStyles";

interface ButtonProps {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
  color?: string;
  size?: number;
  handlePress?: () => void;
}

const index = (props: ButtonProps): JSX.Element => {
  const { title, icon, color, size, handlePress } = props;

  return (
    <RectButton
      style={[styles.button, globalStyles.primaryButton]}
      onPress={handlePress}
    >
      <Text style={globalStyles.primaryButtonText}>{title}</Text>
      {icon && <Feather name={icon} color={color} size={size} />}
    </RectButton>
  );
};

export default index;
