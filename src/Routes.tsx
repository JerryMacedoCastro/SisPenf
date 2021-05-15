import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PasswordRecover from "./pages/PasswordRecover";
import Home from "./pages/Home";
import NewPuerperal from "./pages/NewPuerperal";
import FindPatient from "./pages/FindPatient";
import PsychologicalNeeds from "./pages/PsychologicalNeeds";
import SpiritualNeeds from "./pages/SpiritualNeeds";

const { Navigator, Screen } = createStackNavigator();
const Routes = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "#f2f3f5" },
        }}
      >
        <Screen name="Landing" component={Landing} />
        <Screen name="Login" component={Login} />
        <Screen name="Register" component={Register} />
        <Screen name="PasswordRecover" component={PasswordRecover} />
        <Screen name="Home" component={Home} />
        <Screen name="NewPuerperal" component={NewPuerperal} />
        <Screen name="FindPatient" component={FindPatient} />
        <Screen name="PsycologicalNeeds" component={PsychologicalNeeds} />
        <Screen name="SpiritualNeeds" component={SpiritualNeeds} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
