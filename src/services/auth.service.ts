import api from "./api";

interface IResponse {
  token: string;
  id: number;
  name: string;
  email: string;
}

const headers = {
  "Content-type": "application/json; charset=UTF-8",
};

export async function signIn(
  email: string,
  password: string
): Promise<IResponse> {
  try {
    const { baseURL } = api;
    const loginData = { email: email, password: password };
    const response = await fetch(`${baseURL}/login`, {
      method: "POST",
      headers: headers,
      mode: "cors",
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      const message = await response.json();
      throw new Error(message);
    }
    const result: IResponse = await response.json();

    return result;
  } catch (error) {
    throw new Error("Error on authService.singIn: " + error.message);
  }
}
