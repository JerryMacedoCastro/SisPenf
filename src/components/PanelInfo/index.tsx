import React from "react";
import { StyleSheet, Text, View } from "react-native";
interface PanelInfoProps {
  value: number;
  label: string;
}
const PanelInfo = (props: PanelInfoProps) => {
  const { value, label } = props;

  return (
    <View style={styles.block}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default PanelInfo;

const styles = StyleSheet.create({
  block: {
    display: "flex",
    flexDirection: "column",
    width: 70,

    alignItems: "center",
    padding: 3,
    marginRight: 20,
  },

  value: {
    color: "#27615A",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "JosefinSans_700Bold",
  },
  label: {
    color: "#27615A",
    textAlign: "center",
    fontSize: 10,
    fontFamily: "JosefinSans_700Bold",
  },
});
