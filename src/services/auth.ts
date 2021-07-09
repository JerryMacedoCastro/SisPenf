import { IUser } from "../interfaces/index";
import api from "./api";

interface IResponse {
  token: string;
  user: IUser;
}

export async function signIn(
  email: string,
  password: string
): Promise<IResponse> {
  const data = { email: email, password: password };
  const response = await api.post("/login", data);
  console.log(response.data);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "jk12h3j21h3jk212h3jk12h3jkh12j3kh12k123hh21g3f12f3",
        user: { name: "Thiago", email: "thiagomarinho@rockeseat.com.br" },
      });
    }, 2000);
  });
}
