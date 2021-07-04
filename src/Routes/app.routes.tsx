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

const { Navigator, Screen } = createStackNavigator();
const AppRoutes = (): JSX.Element => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: colors.white },
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="NewPuerperal" component={NewPuerperal} />
      <Screen name="FindPatient" component={FindPatient} />
      <Screen name="PsychologicalNeeds" component={PsychologicalNeeds} />
      <Screen name="SpiritualNeeds" component={SpiritualNeeds} />
      <Screen name="PsychobiologicNeeds" component={PsychobiologicNeeds} />
      <Screen name="ChildbirthData" component={ChildbirthData} />
      <Screen name="PartOne" component={PartOne} />
      <Screen name="PartTwo" component={PartTwo} />
    </Navigator>
  );
};

export default AppRoutes;
