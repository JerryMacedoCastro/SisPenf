import api from "./api";
import { IInfirmariesResponse } from "../interfaces";

const headers = {
  "Content-type": "application/json; charset=UTF-8",
};

export async function getInfirmaries(): Promise<IInfirmariesResponse[]> {
  try {
    const { baseURL } = api;
    const response = await fetch(`${baseURL}/infirmary`, {
      method: "GET",
      headers: headers,
      mode: "cors",
    });

    if (!response.ok) {
      const message = await response.json();
      throw new Error(message);
    }
    const result: IInfirmariesResponse[] = await response.json();

    return result;
  } catch (error) {
    throw new Error("Error on patientService.getInfirmaries: " + error.message);
  }
}
