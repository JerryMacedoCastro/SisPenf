import { Alert } from "react-native";
import { IFormattedDate } from "../interfaces";

export function isValidDate(date: string) {
  const formatoData = /^\d{2}\/\d{2}\/\d{4}$/;

  if (!formatoData.test(date)) {
    return false;
  }

  const [dia, mes, ano] = date.split("/").map(Number);

  if (dia < 1 || dia > 31 || mes < 1 || mes > 12) {
    return false;
  }

  return true;
}

export function changeDate(
  value: string,
  insertValue: (value: IFormattedDate) => void
) {
  const digitsOnly = value.replace(/\D/g, "");
  let formattedData = digitsOnly.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");

  if (formattedData.length > 1 && formattedData.length <= 8) {
    formattedData = insertDivider(formattedData, 2);
  }

  if (formattedData.length > 4 && formattedData.length <= 8) {
    formattedData = insertDivider(formattedData, 5);
  }

  if (formattedData.length > 10) formattedData = formattedData.slice(0, 10);

  if (formattedData.length === 10) {
    const [dia, mes, ano] = formattedData.split("/").map(Number);
    const dateFormated = new Date(`${mes}/${dia}/${ano}`);

    if (dia < 1 || dia > 31 || mes < 1 || mes > 12)
      Alert.alert("Ooops!", "Insira uma data valida!");

    if (dateFormated > new Date())
      Alert.alert("Ooops!", "A data deve ser menor ou igual a data atual");

    insertValue({
      date: new Date(`${mes}/${dia}/${ano}`),
      formattedDate: formattedData,
    });
  } else
    insertValue({
      date: new Date(),
      formattedDate: formattedData,
    });
}

function insertDivider(str: string, part: number): string {
  const firstPart = str.slice(0, part);
  const secondPart = str.slice(part);
  return firstPart + "/" + secondPart;
}
