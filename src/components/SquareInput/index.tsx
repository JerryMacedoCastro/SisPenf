import React, { useCallback, useEffect, useRef } from "react";
import { View, TextInput, TextInputProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useField } from "@unform/core";

import { colors } from "../../Assets/GlobalStyles";
import { styles } from "./styles";
import { IconName } from "../../@types";

interface squareInputProps extends TextInputProps {
  name: string;
  icon: IconName;
}

interface InputReference extends TextInput {
  value: string;
}
const index = ({
  name,
  icon,
  onChangeText,
  ...rest
}: squareInputProps): JSX.Element => {
  const inputRef = useRef<InputReference>(null);
  const { fieldName, registerField, defaultValue = "", error } = useField(name);

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputRef.current,
      getValue() {
        if (inputRef.current) return inputRef.current.value;
        return "";
      },
      setValue(_ref, value) {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: value });
          inputRef.current.value = value;
        }
      },
      clearValue() {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: "" });
          inputRef.current.value = "";
        }
      },
    });
  }, [fieldName, registerField]);

  const handleChangeText = useCallback(
    (value: string) => {
      if (inputRef.current) inputRef.current.value = value;
      if (onChangeText) onChangeText(value);
    },
    [onChangeText]
  );
  return (
    <View style={styles.inputContainer}>
      <TextInput
        ref={inputRef}
        onChangeText={handleChangeText}
        defaultValue={defaultValue}
        style={styles.inputStyle}
        {...rest}
      />
      <Feather name={icon} size={18} color={colors.ashenGreen} />
    </View>
  );
};

export default index;
