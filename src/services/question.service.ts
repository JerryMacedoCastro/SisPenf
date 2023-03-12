import api from "./api";
import { IAnswerResponse, IQuestionResponse } from "../interfaces";

const headers = {
  "Content-type": "application/json; charset=UTF-8",
};

export async function getQuestions(): Promise<IAnswerResponse[]> {
  try {
    const { baseURL } = api;
    const response = await fetch(`${baseURL}/question`, {
      method: "GET",
      headers: headers,
      mode: "cors",
    });

    if (!response.ok) {
      const message = await response.json();
      throw new Error(message);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error("Error on answerService.getQuestions: " + error.message);
  }
}

export async function getQuestionsByType(
  type: number
): Promise<IQuestionResponse[]> {
  try {
    const { baseURL } = api;
    const response = await fetch(`${baseURL}/question/${type}`, {
      method: "GET",
      headers: headers,
      mode: "cors",
    });

    if (!response.ok) {
      const message = await response.json();
      throw new Error(message);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(
      "Error on answerService.getQuestionsByType: " + error.message
    );
  }
}
