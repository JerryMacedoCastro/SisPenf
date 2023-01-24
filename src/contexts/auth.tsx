import React, { createContext, useContext, useEffect, useState } from "react";
import { IAuthContextData, IUser } from "../interfaces";
import * as auth from "../services/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";
interface Props {
  children: React.ReactNode;
}
const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
}

const AuthProvider = ({ children }: Props): JSX.Element => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem("@RNAuth:user");
      const storagedToken = await AsyncStorage.getItem("@RNAuth:token");

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        api.defaults.headers.Authorization = `Baerer ${storagedToken}`;
      }
      setLoading(false);
    }

    loadStorageData();
  }, []);

  async function signIn(email: string, password: string) {
    try {
      const response = await auth.signIn(email, password);
      console.log("response: ", response);
      setUser(response.user);

      api.defaults.headers.Authorization = `Baerer ${response.token}`;

      await AsyncStorage.setItem("@RNAuth:user", JSON.stringify(response.user));
      await AsyncStorage.setItem("@RNAuth:token", response.token);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function signOut() {
    await AsyncStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signIn, signOut, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
