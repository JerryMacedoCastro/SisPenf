import { IUser } from "../interfaces";
import api from "./api";

interface IResponse {
  token: string;
  user: IUser;
}

export async function signIn(
  email: string,
  password: string
): Promise<IResponse> {
  try {
    const loginData = { email: email, password: password };
    const { data } = await api.post("/login", loginData);
    const response: IResponse = {
      token: data.token,
      user: {
        name: data.name,
        email: data.email,
      },
    };
    return response;
  } catch (error) {
    throw new Error("Erro: " + error.message);
  }
}
