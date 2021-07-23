import React, { useEffect, useRef, useState } from "react";
import Picker, { PickerSelectProps } from "react-native-picker-select";
import { useField } from "@unform/core";
import { styles } from "./styles";
import { Platform, View } from "react-native";
import { colors } from "../../Assets/GlobalStyles";
interface Props extends Omit<PickerSelectProps, "onValueChange"> {
  name: string;
}
export default function RNPickerSelect({
  name,
  items,
  ...rest
}: Props): JSX.Element {
  const pickerRef = useRef(null);
  const { fieldName, registerField, defaultValue = "" } = useField(name);
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: pickerRef.current,
      getValue: (ref) => {
        return ref.props.value || "";
      },
      clearValue: (ref) => {
        ref.props.onValueChange(ref.props.placeholder.value);
      },
      setValue: (_, value: string) => {
        setSelectedValue(value);
      },
    });
  }, [fieldName, registerField]);
  return (
    <View style={styles.inputContainer}>
      <Picker
        placeholder={{
          label: "Estado Civil",
          value: null,
          color: colors.gray,
        }}
        style={styles}
        ref={pickerRef}
        value={selectedValue}
        onValueChange={setSelectedValue}
        items={items}
        {...rest}
      />
    </View>
  );
}
