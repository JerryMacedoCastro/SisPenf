import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

interface PanelInfoProps {
  value: number;
  label: string;
}
const index = (props: PanelInfoProps): JSX.Element => {
  const { value, label } = props;

  return (
    <View style={styles.block}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default index;
