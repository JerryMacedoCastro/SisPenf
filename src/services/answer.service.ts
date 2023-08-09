import { IAnswer } from "../interfaces";
import api from "./api";
const headers = {
  "Content-type": "application/json;charset=UTF-8",
};

interface IQuestionsWithAnswer {
  question: string;
  comment?: string | number;
  option?: string;
}

export interface IQuestionsWithAnswerDiagnoses {
  question: string;
  comment?: string | number;
  option?: {
    description: string;
  }[];
  diagnoses?: {
    description: string;
  }[];
}

export async function addAnswer(
  userId: number,
  patientId: number,
  questionId: number,
  comment: string
): Promise<boolean> {
  try {
    const data = {
      userId,
      patientId,
      questionId,
      options: [],
      comment,
    };

    const { baseURL } = api;
    const response = await fetch(`${baseURL}/answer`, {
      method: "POST",
      headers: headers,
      mode: "cors",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const message = await response.json();
      throw new Error(message);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error("Error on answerService.addAnswer: " + error.message);
  }
}

export async function addAnswers(
  userId: number,
  patientId: number,
  answeredQuestions: IQuestionsWithAnswer[]
): Promise<void> {
  try {
    const data = {
      userId,
      patientId,
      questions: answeredQuestions,
    };
    const json = JSON.stringify(data);
    const { baseURL } = api;
    const response = await fetch(`${baseURL}/answers`, {
      method: "POST",
      headers: headers,
      mode: "cors",
      body: json,
    });

    if (!response.ok) {
      const message = await response.json();
      throw new Error(message);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error("Error on answerService.addAnswers: " + error.message);
  }
}

export async function getAnswers(
  patientId: number,
  questiontype: number
): Promise<IAnswer[]> {
  try {
    const { baseURL } = api;
    const response = await fetch(
      `${baseURL}/answer/${patientId}/${questiontype}`,
      {
        method: "GET",
        headers: headers,
        mode: "cors",
      }
    );

    const result: IAnswer[] = await response.json();
    let answers: IAnswer[] = [];
    result.forEach((answer) => {
      answers = [
        ...answers,
        { ...answer, description: answer.question.description },
      ];
    });

    return answers;
  } catch (error) {
    throw new Error("Error on answerService.getAnswer: " + error.message);
  }
}

export async function addAnswerDiagnostic(
  userId: number,
  patientId: number,
  answeredQuestions: IQuestionsWithAnswerDiagnoses
): Promise<void> {
  try {
    const data = {
      userId,
      patientId,
      question: answeredQuestions.question,
      options: answeredQuestions.option,
      diagnoses: answeredQuestions.diagnoses,
      comment: "",
    };

    const json = JSON.stringify(data);
    const { baseURL } = api;
    const response = await fetch(`${baseURL}/answer`, {
      method: "POST",
      headers: headers,
      mode: "cors",
      body: json,
    });

    if (!response.ok) {
      const message = await response.json();
      throw new Error(message);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    const data = {
      userId,
      patientId,
      question: answeredQuestions.question,
      options: answeredQuestions.option,
      diagnoses: answeredQuestions.diagnoses,
      comment: "",
    };
    throw new Error(JSON.stringify(data));
    // throw new Error("Error on answerService.answer: " + error.message);
  }
}
