import api from "./api";
import { IPatientResponse } from "../interfaces";

const headers = {
  "Content-type": "application/json; charset=UTF-8",
};

export async function createPatient(
  name: string,
  birthdate: Date,
  admissionDate: Date,
  hospitalBed: number
): Promise<IPatientResponse> {
  try {
    const data = {
      name: name,
      birthdate: birthdate,
      admissionDate: admissionDate,
      bed: hospitalBed,
    };
    const json = JSON.stringify(data);
    const { baseURL } = api;
    const response = await fetch(`${baseURL}/patient`, {
      method: "POST",
      headers: headers,
      mode: "cors",
      body: json,
    });
    console.log("chegou aqui 2");

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

export async function getAllPatients(): Promise<IPatientResponse[]> {
  try {
    const { baseURL } = api;
    const response = await fetch(`${baseURL}/patient`, {
      method: "GET",
      headers: headers,
      mode: "cors",
    });

    const patients: IPatientResponse[] = await response.json();

    return patients;
  } catch (error) {
    throw new Error("Error on patientService.getAllPatients: " + error.message);
  }
}

export async function getPatientById(id: number): Promise<IPatientResponse> {
  try {
    const { baseURL } = api;
    const response = await fetch(`${baseURL}/patient/${id}`, {
      method: "GET",
      headers: headers,
      mode: "cors",
    });

    const patient: IPatientResponse[] = await response.json();

    return patient[0];
  } catch (error) {
    throw new Error("Error on patientService.getPatient: " + error.message);
  }
}
