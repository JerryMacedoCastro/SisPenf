import { IAnswerResponse, IQuestionAnswer } from "../interfaces";
import { addAnswer } from "../services/answer.service";
import { getQuestions } from "../services/question.service";

async function addAnswers(
  userId: number,
  patientId: number,
  questions: IQuestionAnswer[]
): Promise<boolean> {
  try {
    if (questions.length === 0) return false;
    const questionResponse = await getQuestions();

    const answers: IAnswerResponse[] = questionResponse;
    questions.forEach(async (question) => {
      const selectedQuestion = answers.find((answer) => {
        return answer.description === question.question;
      });
      const questionId = selectedQuestion?.id;
      if (!questionId) throw new Error(`${question} não encontrado(a)`);

      // TODO: Missing pass options to be stored
      const result = await addAnswer(
        userId,
        patientId,
        questionId,
        question.answer
      );
      return result;
    });
    return false;
  } catch (error) {
    return false;
  }
}

export { addAnswers };
