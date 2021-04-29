import React from "react";
import { View } from "react-native";

import { styles } from "./styles";
import Gradient from "../../components/Gradient";
import PatientsList from "../../components/PatientsList";
import Scrollview from "../../components/Scrollview";

const ResumeTab = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Gradient />
      <Scrollview />
      <PatientsList />
    </View>
  );
};
export default ResumeTab;
