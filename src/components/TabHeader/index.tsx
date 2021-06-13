import React, { FunctionComponent } from "react";
import { View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Header from "../Header";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { styles } from "./styles";
import { colors } from "../../Assets/GlobalStyles";

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
          <Header title={title} textColor={colors.white} />
          <Text style={styles.dateText}>{today}</Text>
        </View>

        <Tabs.Navigator
          tabBarOptions={{
            activeTintColor: colors.white,
            inactiveTintColor: colors.gray,
            style: {
              backgroundColor: colors.darkGreen,
            },
            labelStyle: {
              fontSize: 14,
            },
            allowFontScaling: false,
            indicatorStyle: {
              backgroundColor: colors.white,
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
