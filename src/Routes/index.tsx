import React from "react";
import { ActivityIndicator, View } from "react-native";
import { NativeBaseProvider } from "native-base";
import { useAuth } from "../contexts/auth";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

// import AppRoutes from '../routes/app.routes';

const Routes = (): JSX.Element => {
  const { signed, loading } = useAuth();
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    );
  }
  return (
    <NativeBaseProvider>
      <AppRoutes />
    </NativeBaseProvider>
  );
};

export default Routes;
