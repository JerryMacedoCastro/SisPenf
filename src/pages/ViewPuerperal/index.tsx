import { Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Gradient from "../../components/Gradient";

import { styles } from "./styles";
import {
  HStack,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  VStack,
  View,
} from "native-base";
import {
  IFormattedDate,
  INewPuerperalForm,
  IPatientResponse,
  IPsycobiologicNeedsForm,
  IPsycologicalNeedsForm,
  ISpiritualNeedsForm,
  PsycobiologicNeedstype,
  PsycologicalNeedsType,
  SpiritualneedsType,
} from "../../interfaces";
import { useCallback, useEffect, useState } from "react";
import { getPatientById } from "../../services/patient.service";
import { getAnswers } from "../../services/answer.service";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../Routes/app.routes";
import { getAnswerByDescription } from "../../helpers/answers";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import Accordion from "../../components/Accordion";
import { useFocusEffect } from "@react-navigation/native";

type Props = StackScreenProps<RootStackParamList, "ViewPuerperal">;

const ViewPuerperal = ({ route }: Props): JSX.Element => {
  const { patientId } = route.params;
  const [patient, setPatient] = useState<IPatientResponse | null>(null);
  const [answers, setAnswers] = useState<INewPuerperalForm>({
    "Data de admissão": "",
    "Data de nascimento": "",
    "Diagnóstico médico": "",
    "Dieta prescrita": "",
    Nome: "",
  });
  const [dietComment, setDietComment] = useState("");
  const [diagnosticComment, setDiagnosticComment] = useState("");
  const {
    control: controlPsycologicalNeeds,
    handleSubmit: handleSubmitPsycologicalNeeds,
    getValues: getValuesPsycologicalNeeds,
    setValue: setValuePsycologicalNeeds,
  } = useForm<IPsycologicalNeedsForm>();
  const {
    control: controlPsycobiologicNeeds,
    handleSubmit: handleSubmitPsycobiologicNeeds,
    getValues: getValuesPsycobiologicNeeds,
    setValue: setValuePsycobiologicNeeds,
  } = useForm<IPsycobiologicNeedsForm>();
  const {
    control: controlSpiritualNeeds,
    handleSubmit: handleSubmitSpiritualNeeds,
    getValues: getValuesSpiritualNeeds,
    setValue: setValueSpiritualNeeds,
  } = useForm<ISpiritualNeedsForm>();

  const [childbirthDate, setChildbirthDate] = useState<IFormattedDate>({
    date: new Date(),
    formattedDate: "",
  });
  const [childbirthTime, setChildbirthTime] = useState<IFormattedDate>({
    date: new Date(),
    formattedDate: new Date().toLocaleTimeString(),
  });
  const [drugsComment, setDrugsComment] = useState("");
  const [birthComment, setBirthComment] = useState("");

  const onChangeDate = (selectedDate: Date) => {
    const currentDate = selectedDate || childbirthDate;
    const formatted = format(currentDate, "dd/MM/yyyy");
    setChildbirthDate({ date: selectedDate, formattedDate: formatted });
  };

  const onChangeTime = (selectedDate: Date) => {
    const currentDate = selectedDate || childbirthTime;
    const formatted = currentDate.toLocaleTimeString();
    setChildbirthTime({ date: selectedDate, formattedDate: formatted });
  };

  const getPatientInfo = async (id: number) => {
    const patient = await getPatientById(id);
    setPatient(patient);
    const answersArray = await getAnswers(id, 2);

    answersArray.forEach((element) => {
      if (element.question.description === "Dieta prescrita") {
        setAnswers((prevState) => {
          return {
            ...prevState,
            "Dieta prescrita": element.selectedOptions[0].description,
          };
        });
        setDietComment(element.comment);
      }
      if (element.question.description === "Diagnóstico médico") {
        setAnswers((prevState) => {
          return {
            ...prevState,
            "Diagnóstico médico": element.selectedOptions[0].description,
          };
        });
        setDiagnosticComment(element.comment);
      }
    });
  };

  const getPatientInfoPsycologicalNeeds = async (id: number) => {
    const answersArray = await getAnswers(id, 1);

    const psycoNeedsObj: IPsycologicalNeedsForm = {
      "Atitude familiar conflitante": "",
      "Estado civil": "",
      "Falta de apoio social": "",
      Escolaridade: "",
      "Falta de conhecimento sobre a amamentação": "",
      "Falta de conhecimento sobre a ordenha do leite materno": "",
      "Falta de conhecimento sobre a situação clínica do recém-nascido": "",
      "Falta de conhecimento sobre o autocuidado com a ferida cirúrgica": "",
      "Falta de conhecimento sobre o autocuidado com as mamas": "",
      "Falta de conhecimento sobre os cuidados com recém-nascido": "",
      "Falta de conhecimento sobre o planejamento familiar": "",
      "Comunicação verbal prejudicada": "",
      Ansiedade: "",
      "Maternidade/paternidade prejudicada": "",
      "Risco de maternidade/paternidade prejudicada": "",
      "Risco de vínculo mãe-filho prejudicado": "",
    };
    for (const [key] of Object.entries(psycoNeedsObj)) {
      setValuePsycologicalNeeds(
        key as PsycologicalNeedsType,
        getAnswerByDescription(key, answersArray)
      );
    }
  };

  const getPatientInfoPsycobiologicNeeds = async (id: number) => {
    const answersArray = await getAnswers(id, 4);

    const needsObj: IPsycobiologicNeedsForm = {
      Aborto: "",
      Gesta: "",
      Para: "",
      "Número de filhos vivos": "",
      "Pré-natal": "",
      "Número de consultas": "",
      "Intercorrências na gestação": "",
      "Doenças associadas": "",
      Alergias: "",
      "Uso de medicamentos": "",
      "Anti-HIV": "",
      VDRL: "",
      "Classificação sanguínea e fator RH": "",
      Outro: "",
      "Uso de substâncias lícitas e/ou ilícitas": "",
      "Data do parto": "",
      "Hora do parto": "",
      Gestação: "",
      "Tipo de parto": "",
      RPMO: "",
      "Tempo de bolsa rota até o parto": "",
    };
    const drugsIndex = answersArray.findIndex(
      (answer) =>
        answer.description === "Uso de substâncias lícitas e/ou ilícitas"
    );
    setDrugsComment(answersArray[drugsIndex].comment);

    const birthIndex = answersArray.findIndex(
      (answer) => answer.description === "Tipo de parto"
    );
    setBirthComment(answersArray[birthIndex].comment);

    const dateIndex = answersArray.findIndex(
      (answer) => answer.description === "Data do parto"
    );

    const dateArray = answersArray[dateIndex].comment.split("/");
    onChangeDate(new Date(`${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`));
    setValuePsycobiologicNeeds(
      "Data do parto",
      answersArray[dateIndex].comment
    );

    const timeIndex = answersArray.findIndex(
      (answer) => answer.description === "Hora do parto"
    );
    onChangeTime(
      new Date(
        `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}T${answersArray[timeIndex].comment}`
      )
    );
    setValuePsycobiologicNeeds("Hora do parto", childbirthTime.formattedDate);

    for (const [key] of Object.entries(needsObj)) {
      setValuePsycobiologicNeeds(
        key as PsycobiologicNeedstype,
        getAnswerByDescription(key, answersArray)
      );
    }
  };

  const getPatientInfoSpiritualNeeds = async (id: number) => {
    const answersArray = await getAnswers(id, 3);

    const psycoNeedsObj: ISpiritualNeedsForm = {
      "Angústia espiritual": "",
      "Sofrimento espiritual": "",
      "Risco de sofrimento espiritual": "",
    };
    for (const [key] of Object.entries(psycoNeedsObj)) {
      setValueSpiritualNeeds(
        key as SpiritualneedsType,
        getAnswerByDescription(key, answersArray)
      );
    }
  };

  useFocusEffect(
    useCallback(() => {
      if (patientId && !patient) {
        getPatientInfo(patientId);
        getPatientInfoPsycologicalNeeds(patientId);
        getPatientInfoPsycobiologicNeeds(patientId);
        getPatientInfoSpiritualNeeds(patientId);
      }
    }, [])
  );

  // useEffect(() => {
  //   if (patientId && !patient) {
  //     getPatientInfo(patientId);
  //     getPatientInfoPsycologicalNeeds(patientId);
  //     getPatientInfoPsycobiologicNeeds(patientId);
  //   }
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Gradient />

      <KeyboardAvoidingView
        style={styles.content}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={50}
      >
        <View style={styles.titleMain}>
          <Text style={styles.labelTitleMainForm}>STATUS DO PACIENTE</Text>
        </View>
        <ScrollView
          contentContainerStyle={{
            position: "relative",
          }}
        >
          <VStack
            bgColor={"white"}
            flex={1}
            px={10}
            paddingTop={6}
            paddingBottom={4}
          >
            <VStack>
              <Text style={styles.labelTitleContentForm}>Nome:</Text>
              <Text style={styles.labelContentForm}>{patient?.name}</Text>
            </VStack>
            <VStack>
              <Text style={styles.labelTitleContentForm}>
                Data de Nascimento:
              </Text>
              <Text>
                {patient?.birthDate
                  ? format(new Date(patient?.birthDate), "dd/MM/yyyy")
                  : ""}
              </Text>
            </VStack>
            <VStack>
              <Text style={styles.labelTitleContentForm}>
                Data de Admissão:
              </Text>
              <Text>
                {patient?.admissionDate
                  ? format(new Date(patient?.admissionDate), "dd/MM/yyyy")
                  : ""}
              </Text>
            </VStack>
            <VStack>
              <Text style={styles.labelTitleContentForm}>Leito:</Text>
              <Text>
                {patient?.hospitalBed?.description || "Não cadastrado"}
              </Text>
            </VStack>
          </VStack>
          <Accordion title="Necessidades Psicobiológicas">
            <VStack
              bgColor={"white"}
              flex={1}
              px={10}
              paddingTop={6}
              paddingBottom={4}
            >
              <VStack>
                <Text style={styles.labelTitleContentForm}>Gesta:</Text>
                <Text style={styles.labelContentForm}>
                  {getValuesPsycobiologicNeeds("Gesta")}
                </Text>
              </VStack>
              <VStack>
                <Text style={styles.labelTitleContentForm}>Para:</Text>
                <Text>{getValuesPsycobiologicNeeds("Para")}</Text>
              </VStack>
              <VStack>
                <Text style={styles.labelTitleContentForm}>Aborto:</Text>
                <Text>{getValuesPsycobiologicNeeds("Aborto")}</Text>
              </VStack>
              <VStack>
                <Text style={styles.labelTitleContentForm}>
                  Número de filhos vivos:
                </Text>
                <Text>
                  {getValuesPsycobiologicNeeds("Número de filhos vivos")}
                </Text>
              </VStack>
              <VStack>
                <Text style={styles.labelTitleContentForm}>Pré-natal:</Text>
                <Text>{getValuesPsycobiologicNeeds("Pré-natal")}</Text>
              </VStack>
              <VStack>
                <Text style={styles.labelTitleContentForm}>
                  Número de consultas:
                </Text>
                <Text>
                  {getValuesPsycobiologicNeeds("Número de consultas")}
                </Text>
              </VStack>
              <VStack>
                <Text style={styles.labelTitleContentForm}>
                  Intercorrências na gestação:
                </Text>
                <Text>
                  {getValuesPsycobiologicNeeds("Intercorrências na gestação")}
                </Text>
              </VStack>
              <VStack>
                <Text style={styles.labelTitleContentForm}>
                  Doenças associadas:
                </Text>
                <Text>{getValuesPsycobiologicNeeds("Doenças associadas")}</Text>
              </VStack>
              <VStack>
                <Text style={styles.labelTitleContentForm}>Alergias:</Text>
                <Text>{getValuesPsycobiologicNeeds("Alergias")}</Text>
              </VStack>
              <VStack>
                <Text style={styles.labelTitleContentForm}>
                  Uso de medicamentos:
                </Text>
                <Text>
                  {getValuesPsycobiologicNeeds("Uso de medicamentos")}
                </Text>
              </VStack>
              <VStack>
                <Text style={styles.labelTitleContentForm}>Anti-HIV:</Text>
                <Text>{getValuesPsycobiologicNeeds("Anti-HIV")}</Text>
              </VStack>
              <VStack>
                <Text style={styles.labelTitleContentForm}>VDRL:</Text>
                <Text>{getValuesPsycobiologicNeeds("VDRL")}</Text>
              </VStack>
              <VStack>
                <Text style={styles.labelTitleContentForm}>
                  Classificação sanguínea e fator RH:
                </Text>
                <Text>
                  {getValuesPsycobiologicNeeds(
                    "Classificação sanguínea e fator RH"
                  )}
                </Text>
              </VStack>
              <VStack>
                <Text style={styles.labelTitleContentForm}>Outro:</Text>
                <Text>{getValuesPsycobiologicNeeds("Outro")}</Text>
              </VStack>
              <VStack>
                <Text style={styles.labelTitleContentForm}>
                  Uso de substâncias lícitas e/ou ilícitas:
                </Text>
                <Text>
                  {getValuesPsycobiologicNeeds(
                    "Uso de substâncias lícitas e/ou ilícitas"
                  )}
                </Text>
              </VStack>
              <VStack>
                <Text style={styles.labelTitleContentForm}>Data do parto:</Text>
                <Text>{getValuesPsycobiologicNeeds("Data do parto")}</Text>
              </VStack>
              <VStack>
                <Text style={styles.labelTitleContentForm}>Hora do parto:</Text>
                <Text>{getValuesPsycobiologicNeeds("Hora do parto")}</Text>
              </VStack>
              <VStack>
                <Text style={styles.labelTitleContentForm}>Gestação:</Text>
                <Text>{getValuesPsycobiologicNeeds("Gestação")}</Text>
              </VStack>
              <VStack>
                <Text style={styles.labelTitleContentForm}>Tipo de parto:</Text>
                <Text>{getValuesPsycobiologicNeeds("Tipo de parto")}</Text>
              </VStack>
              <VStack>
                <Text style={styles.labelTitleContentForm}>RPMO:</Text>
                <Text>{getValuesPsycobiologicNeeds("RPMO")}</Text>
              </VStack>
              <VStack>
                <Text style={styles.labelTitleContentForm}>
                  Tempo de bolsa rota até o parto:
                </Text>
                <Text>
                  {getValuesPsycobiologicNeeds(
                    "Tempo de bolsa rota até o parto"
                  )}
                </Text>
              </VStack>
            </VStack>
          </Accordion>
          <Accordion title="Necessidades Psicossociais">
            <VStack
              bgColor={"white"}
              flex={1}
              px={10}
              paddingTop={6}
              paddingBottom={4}
            >
              <VStack>
                <Text style={styles.labelTitleContentForm}>Estado civil:</Text>
                <Text>{getValuesPsycologicalNeeds("Estado civil")}</Text>
              </VStack>
              <VStack>
                <Text style={styles.labelTitleContentForm}>
                  Falta de apoio social:
                </Text>
                <Text>
                  {getValuesPsycologicalNeeds("Falta de apoio social")}
                </Text>
              </VStack>
              <VStack>
                <Text style={styles.labelTitleContentForm}>Escolaridade:</Text>
                <Text>{getValuesPsycologicalNeeds("Escolaridade")}</Text>
              </VStack>
              <VStack>
                <Text style={styles.labelTitleContentForm}>
                  Falta de conhecimento sobre a amamentação:
                </Text>
                <Text>
                  {getValuesPsycologicalNeeds(
                    "Falta de conhecimento sobre a amamentação"
                  )}
                </Text>
              </VStack>
              <VStack>
                <Text style={styles.labelTitleContentForm}>
                  Falta de conhecimento sobre a ordenha do leite materno:
                </Text>
                <Text>
                  {getValuesPsycologicalNeeds(
                    "Falta de conhecimento sobre a ordenha do leite materno"
                  )}
                </Text>
              </VStack>
              <VStack>
                <Text style={styles.labelTitleContentForm}>
                  Falta de conhecimento sobre a situação clínica do
                  recém-nascido:
                </Text>
                <Text>
                  {getValuesPsycologicalNeeds(
                    "Falta de conhecimento sobre a situação clínica do recém-nascido"
                  )}
                </Text>
              </VStack>
              <VStack>
                <Text style={styles.labelTitleContentForm}>
                  Falta de conhecimento sobre o autocuidado com a ferida
                  cirúrgica:
                </Text>
                <Text>
                  {getValuesPsycologicalNeeds(
                    "Falta de conhecimento sobre o autocuidado com a ferida cirúrgica"
                  )}
                </Text>
              </VStack>
              <VStack>
                <Text style={styles.labelTitleContentForm}>
                  Falta de conhecimento sobre o autocuidado com as mamas:
                </Text>
                <Text>
                  {getValuesPsycologicalNeeds(
                    "Falta de conhecimento sobre o autocuidado com as mamas"
                  )}
                </Text>
              </VStack>
              <VStack>
                <Text style={styles.labelTitleContentForm}>
                  Falta de conhecimento sobre os cuidados com recém-nascido:
                </Text>
                <Text>
                  {getValuesPsycologicalNeeds(
                    "Falta de conhecimento sobre os cuidados com recém-nascido"
                  )}
                </Text>
              </VStack>
              <VStack>
                <Text style={styles.labelTitleContentForm}>
                  Comunicação verbal prejudicada:
                </Text>
                <Text>
                  {getValuesPsycologicalNeeds("Comunicação verbal prejudicada")}
                </Text>
              </VStack>
              <VStack>
                <Text style={styles.labelTitleContentForm}>Ansiedade:</Text>
                <Text>{getValuesPsycologicalNeeds("Ansiedade")}</Text>
              </VStack>
              <VStack>
                <Text style={styles.labelTitleContentForm}>
                  Atitude familiar conflitante:
                </Text>
                <Text>
                  {getValuesPsycologicalNeeds("Atitude familiar conflitante")}
                </Text>
              </VStack>
              <VStack>
                <Text style={styles.labelTitleContentForm}>
                  Maternidade/paternidade prejudicada:
                </Text>
                <Text>
                  {getValuesPsycologicalNeeds(
                    "Maternidade/paternidade prejudicada"
                  )}
                </Text>
              </VStack>
              <VStack>
                <Text style={styles.labelTitleContentForm}>
                  Risco de maternidade/paternidade prejudicada:
                </Text>
                <Text>
                  {getValuesPsycologicalNeeds(
                    "Risco de maternidade/paternidade prejudicada"
                  )}
                </Text>
              </VStack>
              <VStack>
                <Text style={styles.labelTitleContentForm}>
                  Risco de vínculo mãe-filho prejudicado:
                </Text>
                <Text>
                  {getValuesPsycologicalNeeds(
                    "Risco de vínculo mãe-filho prejudicado"
                  )}
                </Text>
              </VStack>
            </VStack>
          </Accordion>
          <Accordion title="Necessidades Psicoespirituais">
            <VStack
              bgColor={"white"}
              flex={1}
              px={10}
              paddingTop={6}
              paddingBottom={4}
            >
              <VStack>
                <Text style={styles.labelTitleContentForm}>
                  Angústia espiritual:
                </Text>
                <Text>{getValuesSpiritualNeeds("Angústia espiritual")}</Text>
              </VStack>
              <VStack>
                <Text style={styles.labelTitleContentForm}>
                  Sofrimento espiritual:
                </Text>
                <Text>{getValuesSpiritualNeeds("Sofrimento espiritual")}</Text>
              </VStack>
              <VStack>
                <Text style={styles.labelTitleContentForm}>
                  Risco de sofrimento espiritual:
                </Text>
                <Text>
                  {getValuesSpiritualNeeds("Risco de sofrimento espiritual")}
                </Text>
              </VStack>
            </VStack>
          </Accordion>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ViewPuerperal;
