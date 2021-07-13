import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../pages/Home";
import NewPuerperal from "../pages/NewPuerperal";
import FindPatient from "../pages/FindPatient";
import PsychologicalNeeds from "../pages/MaternalHistory/PsychologicalNeeds";
import SpiritualNeeds from "../pages/MaternalHistory/SpiritualNeeds";
import PsychobiologicNeeds from "../pages/MaternalHistory/PsychobiologicNeeds";
import ChildbirthData from "../pages/MaternalHistory/ChildbirthData";
import PartOne from "../pages/PhysicalExam/PartOne";
import PartTwo from "../pages/PhysicalExam/PartTwo";
import { colors } from "../Assets/GlobalStyles";

export type RootStackParamList = {
  Home: undefined;
  NewPuerperal: undefined;
  FindPatient: undefined;
  PsychologicalNeeds: { patientId: number };
  SpiritualNeeds: { patientId: number };
  PsychobiologicNeeds: { patientId: number };
  ChildbirthData: { patientId: number };
  PartOne: undefined;
  PartTwo: undefined;
};

const AppRoutes = (): JSX.Element => {
  const RootStack = createStackNavigator<RootStackParamList>();
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: colors.white },
      }}
    >
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="NewPuerperal" component={NewPuerperal} />
      <RootStack.Screen name="FindPatient" component={FindPatient} />
      <RootStack.Screen
        name="PsychologicalNeeds"
        component={PsychologicalNeeds}
      />
      <RootStack.Screen name="SpiritualNeeds" component={SpiritualNeeds} />
      <RootStack.Screen
        name="PsychobiologicNeeds"
        component={PsychobiologicNeeds}
      />
      <RootStack.Screen name="ChildbirthData" component={ChildbirthData} />
      <RootStack.Screen name="PartOne" component={PartOne} />
      <RootStack.Screen name="PartTwo" component={PartTwo} />
    </RootStack.Navigator>
  );
};

export default AppRoutes;
