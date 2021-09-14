import { Alert } from "react-native";
import { IAnswerResponse, IQuestionAnswer } from "../interfaces";
import api from "../services/api";

async function useAnswerPost(
  userId: number,
  patientId: number,
  questions: IQuestionAnswer[]
): Promise<boolean> {
  try {
    if (questions.length === 0) return false;
    const questionResponse = await api.get("/question");
    const answers: IAnswerResponse[] = questionResponse.data;
    questions.forEach(async (question) => {
      const selectedQuestion = answers.find((answer) => {
        return answer.description === question.question;
      });
      const questionId = selectedQuestion?.id;
      if (!questionId) throw new Error(`${question} não encontrado(a)`);

      const data = {
        userId,
        patientId,
        questionId,
        options: [],
        comment: question.answer,
      };

      return api
        .post("/answer", data)
        .then((response) => response.status === 200);
    });
    return false;
  } catch (error) {
    Alert.alert("Erro", error.message);
    return false;
  }
}

export default useAnswerPost;
