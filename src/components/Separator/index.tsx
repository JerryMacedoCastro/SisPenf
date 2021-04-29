import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
interface SeparatorProps {
  text: string;
}

const index = ({ text }: SeparatorProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.lines} />
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.lines} />
    </View>
  );
};

export default index;
