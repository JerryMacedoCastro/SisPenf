// eslint-disable-next-line no-use-before-define
import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Fieldset from "../Fieldset";
import { patients } from "../../data";
import { styles } from "./styles";

const index = (): JSX.Element => {
  return (
    <View style={styles.content}>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          position: "relative",
        }}
      >
        {patients.map((patient, index) => {
          return (
            <Fieldset
              key={index}
              value={patient.name}
              label={`Leito ${(index + 1).toString()}`}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};
export default index;
