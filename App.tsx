// eslint-disable-next-line no-use-before-define
import React from "react";
import { useFonts } from "expo-font";
// eslint-disable-next-line camelcase
import { JosefinSans_700Bold } from "@expo-google-fonts/josefin-sans";
import { Text } from "react-native";

import Routes from "./src/Routes/index";
import { AuthProvider } from "./src/contexts/auth";
import { NavigationContainer } from "@react-navigation/native";

const App = (): JSX.Element => {
  const [fontsLoaded] = useFonts({
    JosefinSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Carregando...</Text>;
  }
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
