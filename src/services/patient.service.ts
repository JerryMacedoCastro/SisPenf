import api from "./api";
import { IPatientResponse } from "../interfaces";

const headers = {
  "Content-type": "application/json; charset=UTF-8",
};

export async function createPatient(
  name: string,
  birthdate: Date,
  hospitalBed: number
): Promise<IPatientResponse> {
  try {
    const data = { name: name, birthdate: birthdate, bed: hospitalBed };
    const { baseURL } = api;
    const response = await fetch(`${baseURL}/patient`, {
      method: "POST",
      headers: headers,
      mode: "cors",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const message = await response.json();
      throw new Error(message);
    }
    const result: IPatientResponse = await response.json();

    return result;
  } catch (error) {
    throw new Error("Error on patientService.createPatient: " + error.message);
  }
}
