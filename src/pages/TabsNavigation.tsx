// eslint-disable-next-line no-use-before-define
import React from "react";
import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PanelTab from "./PanelTab";
import ResumeTab from "./ResumeTab";

const TabsNavigation = (): JSX.Element => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Painel") {
            return <Feather name="home" size={size} color={color} />;
          } else {
            return <Feather name="list" size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "#233f3c",
        inactiveTintColor: "#999",
        style: {
          height: 64,
          backgroundColor: "#BCE0DC",
        },
        labelStyle: {
          fontSize: 14,
        },
      }}
    >
      <Tab.Screen name="Painel" component={PanelTab} />
      <Tab.Screen name="Resumo" component={ResumeTab} />
    </Tab.Navigator>
  );
};

export default TabsNavigation;

// const styles = StyleSheet.create({})
