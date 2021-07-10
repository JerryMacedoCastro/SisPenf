import React, { useCallback, useEffect, useRef } from "react";
import { TextInputProps, View, TextInput } from "react-native";
import { useField } from "@unform/core";

import { styles } from "./styles";
interface commonInputProps extends TextInputProps {
  name: string;

}

interface InputReference extends TextInput {
  value: string
}

const index = ({ name, onChangeText, ...rest }: commonInputProps): JSX.Element => {
  const inputRef = useRef<InputReference>(null)
  const { fieldName, registerField, defaultValue = '', error } = useField(name)
  useEffect(() => {
    if (inputRef.current) inputRef.current.value = defaultValue
  }, [defaultValue])


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
      if (inputRef.current) inputRef.current.value = value
      if (onChangeText) onChangeText(value)
    },
    [onChangeText]
  )
  return (
    <View style={styles.inputContainer}>
      <TextInput
        ref={inputRef}
        onChangeText={handleChangeText}
        style={styles.inputText}
        {...rest}
      ></TextInput>
    </View>
  );
};

export default index;
