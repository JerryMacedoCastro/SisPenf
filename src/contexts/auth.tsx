import React, { createContext, useContext, useEffect, useState } from "react";
import { IAuthContextData, IUser } from "../interfaces";
import * as auth from "../services/auth.service";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
        // api.defaults.headers.Authorization = `Baerer ${storagedToken}`;
      }
      setLoading(false);
    }

    loadStorageData();
  }, []);

  async function signIn(email: string, password: string) {
    try {
      const response = await auth.signIn(email, password);
      const user = {
        id: response.id,
        name: response.name,
        email: response.email,
      };
      setUser(user);
      //api.defaults.headers.Authorization = `Baerer ${response.token}`;

      await AsyncStorage.setItem("@RNAuth:user", JSON.stringify(user));
      await AsyncStorage.setItem("@RNAuth:token", response.token);
      setLoading(false);
    } catch (error) {
      throw new Error("Error on authentication");
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
