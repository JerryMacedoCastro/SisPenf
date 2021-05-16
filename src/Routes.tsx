import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./pages/Login";
import Register from "./pages/Register";
import PasswordRecover from "./pages/PasswordRecover";
import Home from "./pages/Home";
import NewPuerperal from "./pages/NewPuerperal";
import FindPatient from "./pages/FindPatient";
import PsychologicalNeeds from "./pages/MaternalHistory/PsychologicalNeeds";
import SpiritualNeeds from "./pages/MaternalHistory/SpiritualNeeds";
import PsychobiologicNeeds from "./pages/MaternalHistory/PsychobiologicNeeds";
import ChildbirthData from "./pages/MaternalHistory/ChildbirthData";
import PartOne from "./pages/PhysicalExam/PartOne";
import PartTwo from "./pages/PhysicalExam/PartTwo";
import { colors } from "./Assets/GlobalStyles";

const { Navigator, Screen } = createStackNavigator();
const Routes = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: colors.white },
        }}
      >
        <Screen name="Login" component={Login} />
        <Screen name="Register" component={Register} />
        <Screen name="PasswordRecover" component={PasswordRecover} />
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
    </NavigationContainer>
  );
};

export default Routes;
