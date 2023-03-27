import { IAnswer } from "../interfaces";

export const getAnswerByDescription = (
  description: string,
  answersArray: IAnswer[]
): string => {
  const answer = answersArray.find(
    (answer) => answer.description === description
  );
  if (answer) {
    if (answer.selectedOptions.length)
      return answer.selectedOptions[0].description;
    else return answer.comment;
  }
  return "";
};
