import React from "react";
import { View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import DateHeader from "../../components/DateHeader";
import Gradient from "../../components/Gradient";

import { styles } from "./styles";
import PsychologicalNeeds from "../PsychologicalNeeds";
import SpiritualNeeds from "../SpiritualNeeds";

const index = (): JSX.Element => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <View style={styles.container}>
      <Gradient />
      <DateHeader title="Historico Materno" />
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#fff",
          inactiveTintColor: "#999",
          style: {
            height: 64,
            backgroundColor: "#27615A",
            marginTop: "27%",
          },
          labelStyle: {
            fontSize: 14,
          },
        }}
      >
        <Tab.Screen
          name="Necessidades Psicologicas"
          component={PsychologicalNeeds}
        />
        <Tab.Screen
          name="Necessidades espirituais"
          component={SpiritualNeeds}
        />
      </Tab.Navigator>
    </View>
  );
};

export default index;
