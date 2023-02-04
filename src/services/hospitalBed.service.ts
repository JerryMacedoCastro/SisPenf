import api from "./api";
import { IHospitalBedResponse } from "../interfaces";

const headers = {
  "Content-type": "application/json; charset=UTF-8",
};

export async function getHospitalbedByNumber(
  bed: number
): Promise<IHospitalBedResponse[]> {
  try {
    const { baseURL } = api;
    const response = await fetch(`${baseURL}//hospitalbed/${bed}`, {
      method: "GET",
      headers: headers,
      mode: "cors",
    });

    if (!response.ok) {
      const message = await response.json();
      throw new Error(message);
    }
    const result: IHospitalBedResponse[] = await response.json();

    return result;
  } catch (error) {
    throw new Error("Error on patientService.getInfirmaries: " + error.message);
  }
}
