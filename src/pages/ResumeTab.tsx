import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Gradient from "../components/Gradient";
import Header from "../components/Header";
import PatientsList from "../components/PatientsList";
import Scrollview from "../components/Scrollview";

export default function ResumeTab() {
  return (
    <View style={styles.container}>
      <Gradient />
      <Scrollview />
      <PatientsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BCE0DC",
    alignItems: "center",
    justifyContent: "center",
  },
});
