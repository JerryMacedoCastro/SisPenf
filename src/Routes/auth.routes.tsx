import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { colors } from "../Assets/GlobalStyles";
import Login from "../pages/Login";
// import Register from "../pages/Register";
// import PasswordRecover from "../pages/PasswordRecover";

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes = (): JSX.Element => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: colors.white },
      }}
    >
      <Screen name="Login" component={Login} />
      {/* <Screen name="Register" component={Register} />
      <Screen name="PasswordRecover" component={PasswordRecover} /> */}
    </Navigator>
  );
};

export default AuthRoutes;
