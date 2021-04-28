// eslint-disable-next-line no-use-before-define
import React from "react";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";

interface FieldsetProps {
  label: string;
  value: string;
}

const index = (props: FieldsetProps): JSX.Element => {
  const { label, value } = props;
  return (
    <View style={styles.fieldSet}>
      <Text style={styles.legend}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
      <Feather name="user-check" size={20} color="#27615A" />
      <Feather name="alert-triangle" size={20} color="#27615A" />
      <Feather name="file-text" size={20} color="#27615A" />
      <Feather name="log-out" size={20} color="#27615A" />
      <Feather name="more-horizontal" size={20} color="#27615A" />
    </View>
  );
};

export default index;
