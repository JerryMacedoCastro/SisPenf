import React, { FunctionComponent } from "react";
import { View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Header from "../Header";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { styles } from "./styles";

interface ITabHeaderProps {
  firstTab: FunctionComponent;
  secondTab: FunctionComponent;
  title: string;
}

const index = ({
  firstTab,
  secondTab,
  title,
}: ITabHeaderProps): JSX.Element => {
  const Tabs = createMaterialTopTabNavigator();
  const today = format(new Date(), "PPPPp", { locale: ptBR });

  return (
    <>
      <View style={styles.safeArea}>
        <View style={styles.container}>
          <Header title={title} textColor="#fff" />
          <Text style={styles.dateText}>{today}</Text>
        </View>

        <Tabs.Navigator
          tabBarOptions={{
            activeTintColor: "#fff",
            inactiveTintColor: "#999",
            style: {
              backgroundColor: "#27615A",
            },
            labelStyle: {
              fontSize: 14,
            },
            allowFontScaling: false,
            indicatorStyle: {
              backgroundColor: "#fff",
            },
          }}
        >
          <Tabs.Screen name="Necessidades Psicologicas" component={firstTab} />
          <Tabs.Screen name="Necessidades espirituais" component={secondTab} />
        </Tabs.Navigator>
      </View>
    </>
  );
};

export default index;
