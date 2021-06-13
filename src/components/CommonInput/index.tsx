import React from "react";
import { TextInputProps, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import { styles } from "./styles";
interface commonInputProps extends TextInputProps {
  title: string;
  value?: string;
}

const index = ({ title, value, ...rest }: commonInputProps): JSX.Element => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        returnKeyType="next"
        style={styles.inputText}
        placeholder={title}
        value={value}
        {...rest}
      ></TextInput>
    </View>
  );
};

export default index;
