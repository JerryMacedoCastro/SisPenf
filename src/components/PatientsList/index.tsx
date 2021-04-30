// eslint-disable-next-line no-use-before-define
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Fieldset from "../Fieldset";
import { patients } from "../../data";
import { styles } from "./styles";
import Animated from "react-native-reanimated";

const index = (): JSX.Element => {
  return (
    <Animated.View style={[styles.content]}>
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
    </Animated.View>
  );
};
export default index;
