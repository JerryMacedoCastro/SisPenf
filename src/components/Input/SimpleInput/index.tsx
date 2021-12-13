import React from "react";
import { View, TextInput, TextInputProps } from "react-native";

import { styles } from "./styles";
interface simpleInputProps extends TextInputProps {
  label: string;
  onChangeText?: (text: string) => void;
}

const index = ({
  label,
  onChangeText,
  value,
  ...rest
}: simpleInputProps): JSX.Element => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={label}
        onChangeText={onChangeText}
        style={styles.inputText}
        value={value}
        {...rest}
      />
    </View>
  );
};

export default index;
