import { useNavigation } from "@react-navigation/native";
import { format } from "date-fns";
import { Button, KeyboardAvoidingView, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, Platform, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { StackScreenProps } from "@react-navigation/stack";
import { globalStyles } from "../../Assets/GlobalStyles";
import { RootStackParamList } from "../../Routes/app.routes";
import DateHeader from "../../components/DateHeader";
import Gradient from "../../components/Gradient";
import CommonInput from "../../components/Input/CommonInput";
import PickerSelect from "../../components/PickerSelect";
import { useAuth } from "../../contexts/auth";
import useKeyboardControll from "../../hooks/useKeyboardControll";
import {
  IFormattedDate,
  INewPuerperalForm,
  IPatientResponse,
} from "../../interfaces";
import { addAnswers, getAnswers } from "../../services/answer.service";
import { createPatient, getPatientById } from "../../services/patient.service";
import { changeDate, isValidDate } from "../../utils/date";
import { styles } from "./styles";

type Props = StackScreenProps<RootStackParamList, "NewPuerperal">;

const NewPuerperal = ({ route }: Props): JSX.Element => {
  const { patientId } = route.params;
  const [patient, setPatient] = useState<IPatientResponse | null>(null);
  const [birthDate, setBirthDate] = useState<IFormattedDate>({
    date: new Date(1999, 1, 1),
    formattedDate: "",
  });
  const [admissionDate, setAdmissionDate] = useState<IFormattedDate>({
    date: new Date(),
    formattedDate: "",
  });
  const [showBirthDateModal, setShowBirthDateModal] = useState(false);
  const [showAdmissionDateModal, setShowAdmissionDateModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dietComment, setDietComment] = useState("");
  const [diagnosticComment, setDiagnosticComment] = useState("");
  const isKeyboardShown = useKeyboardControll();
  const navigation = useNavigation();
  const [answers, setAnswers] = useState<INewPuerperalForm>({
    "Data de admissão": "",
    "Data de nascimento": "",
    "Diagnóstico médico": "",
    "Dieta prescrita": "",
    Nome: "",
  });
  const { control, handleSubmit, setValue, getValues } =
    useForm<INewPuerperalForm>();
  const { user } = useAuth();

  const validDate = (date: string) => {
    const formatoData = /^\d{2}\/\d{2}\/\d{4}$/;
    return formatoData.test(date);
  };

  const onChangeBirthDate = (selectedDate: Date) => {
    const currentDate = selectedDate || birthDate;
    const formatted = format(currentDate, "dd/MM/yyyy");
    setBirthDate({ date: selectedDate, formattedDate: formatted });
  };

  const onChangeAdmissionDate = (selectedDate: Date) => {
    const currentDate = selectedDate || admissionDate;
    setShowAdmissionDateModal(Platform.OS === "ios");
    const formatted = format(currentDate, "dd/MM/yyyy");
    setAdmissionDate({ date: selectedDate, formattedDate: formatted });
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

  if (patientId && !patient) {
    getPatientInfo(patientId);
  }

  // async function fetchInfirmariesData() {
  //   let keyValueInfirmaries: keyValue[] = [];
  //   try {
  //     const infirmariesResponse: IInfirmariesResponse[] =
  //       await getInfirmaries();

  //     infirmariesResponse.forEach((infirmary: IInfirmariesResponse) => {
  //       const keyValueInfirmary: keyValue = {
  //         label: infirmary.description,
  //         value: infirmary.id,
  //       };
  //       keyValueInfirmaries = [...keyValueInfirmaries, keyValueInfirmary];
  //     });
  //     setInfirmaries(keyValueInfirmaries);
  //   } catch (error) {
  //     throw new Error("Erro ao buscar enfermarias", error.message);
  //   }
  // }

  // useEffect(() => {
  //   try {
  //     fetchInfirmariesData();
  //   } catch (error) {
  //     Alert.alert("Ops", error.message);
  //   }
  // }, []);

  // const handleChangeInfirmary = async (item: string) => {
  //   const value = Number(item);
  //   setBedPickerDisabled(true);
  //   setBeds([]);
  //   setHospitalBed(0);
  //   setInfirmary(value);

  //   let keyValueBeds: keyValue[] = [];
  //   try {
  //     const bedsResponse: IHospitalBedResponse[] = await getHospitalbedByNumber(
  //       value
  //     );
  //     bedsResponse.forEach((bed: IHospitalBedResponse) => {
  //       const keyValueBed: keyValue = {
  //         label: bed.description,
  //         value: bed.id,
  //       };
  //       if (!bed.isFilled) {
  //         keyValueBeds = [...keyValueBeds, keyValueBed];
  //       } else if (patientId) {
  //         keyValueBeds = [...keyValueBeds, keyValueBed];
  //       }
  //     });
  //     setBeds(keyValueBeds);

  //     setBedPickerDisabled(false);
  //   } catch (error) {
  //     Alert.alert("Problema de conexão!", error.message);
  //   }
  // };

  const handleCancel = () => {
    if (patientId) {
      navigation.navigate("PsychologicalNeeds", {
        patientId: patientId,
        isNewPatient: patientId === null,
      });
    } else {
      navigation.navigate("Home");
    }
  };

  const submitForm = async (data: INewPuerperalForm) => {
    setLoading(true);
    console.log("entrou", data);

    const answeredQuestions = [
      {
        question: "Diagnóstico médico",
        comment: diagnosticComment,
        option: data["Diagnóstico médico"],
      },
      {
        question: "Dieta prescrita",
        comment: dietComment,
        option: data["Dieta prescrita"],
      },
    ];

    if (!isValidDate(birthDate.formattedDate)) {
      setLoading(false);
      return Alert.alert(
        "Data inválida",
        "Preencha a data de nascimento com valores válidos"
      );
    }

    if (birthDate.date > new Date()) {
      setLoading(false);
      return Alert.alert(
        "Data inválida",
        "Preencha a data de nascimento com uma data menor ou igual a de hoje."
      );
    }

    if (!isValidDate(admissionDate.formattedDate)) {
      setLoading(false);
      return Alert.alert(
        "Data inválida",
        "Preencha a data de admissão com valores válidos"
      );
    }

    if (admissionDate.date > new Date()) {
      setLoading(false);
      return Alert.alert(
        "Data inválida",
        "Preencha a data de admissão com uma data menor ou igual a de hoje."
      );
    }

    if (
      !data.Nome ||
      !birthDate.formattedDate ||
      !admissionDate.formattedDate ||
      !data["Diagnóstico médico"] ||
      !data["Dieta prescrita"]
    ) {
      Alert.alert(
        "Preencha todos os campos",
        "Todos os campos são obrigatórios!"
      );
      setLoading(false);
      return;
    }

    try {
      const patient: IPatientResponse = await createPatient(
        patientId,
        data.Nome,
        birthDate.date,
        admissionDate.date
      );

      if (patient.id && user) {
        await addAnswers(user.id, patient.id, answeredQuestions);
        navigation.navigate("PsychologicalNeeds", {
          patientId: patient.id,
          isNewPatient: patientId === null,
        });
      } else {
        throw new Error("Usuário ou paciente não encontrados");
      }
    } catch (error) {
      Alert.alert("Ops...", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (patient) {
      onChangeBirthDate(new Date(patient.birthDate));
      onChangeAdmissionDate(new Date(patient.admissionDate));
      setValue("Nome", patient.name);
      setValue("Data de admissão", admissionDate.formattedDate);
      setValue("Data de nascimento", birthDate.formattedDate);
      setValue("Diagnóstico médico", answers["Diagnóstico médico"]);
      setValue("Dieta prescrita", answers["Dieta prescrita"]);
    }
  }, [answers]);

  return (
    <>
      {!isKeyboardShown && <DateHeader title="Admitir puérpera" />}
      <SafeAreaView style={styles.container}>
        <Gradient />
        {/* <View style={styles.buttonsContainer}>
          {infirmaries.length > 0 ? (
            <Picker
              placeholder="Enfermaria"
              items={infirmaries}
              onValueChange={async (item) => await handleChangeInfirmary(item)}
              selectedValue={patient ? infirmary.toString() : undefined}
            />
          ) : (
            <ActivityIndicator size="small" color={colors.darkGreen} />
          )}
          {infirmaries.length > 0 &&
          infirmary !== 0 &&
          bedsPickerDisabled &&
          beds.length === 0 ? (
            <ActivityIndicator size="small" color={colors.darkGreen} />
          ) : (
            <Picker
              placeholder="Leito"
              items={beds}
              onValueChange={(item) => setHospitalBed(Number(item))}
              isDisabled={bedsPickerDisabled || beds.length === 0}
              selectedValue={
                patient ? patient.hospitalBed.id.toString() : undefined
              }
            />
          )}
        </View> */}

        <KeyboardAvoidingView
          style={styles.content}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={50}
        >
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
              <Controller
                control={control}
                name="Nome"
                render={({ field: { onChange } }) => (
                  <CommonInput
                    placeholder={"Nome"}
                    returnKeyType="next"
                    onChangeText={onChange}
                    label="Nome"
                    value={getValues("Nome")}
                  />
                )}
              />
              <Controller
                control={control}
                name="Data de nascimento"
                render={({ field: { onChange } }) => (
                  <CommonInput
                    label="Data de nascimento"
                    placeholder={"__/__/____"}
                    value={birthDate.formattedDate}
                    keyboardType="numeric"
                    returnKeyType="next"
                    onChangeText={(value) => {
                      onChange(value);
                      changeDate(value, setBirthDate);
                    }}
                  />
                )}
              />

              <Controller
                control={control}
                name="Data de admissão"
                render={({ field: { onChange } }) => (
                  <CommonInput
                    label="Data de admissão"
                    placeholder={"__/__/____"}
                    value={admissionDate.formattedDate}
                    keyboardType="numeric"
                    returnKeyType="next"
                    onChangeText={(value) => {
                      onChange(value);
                      changeDate(value, setAdmissionDate);
                    }}
                  />
                )}
              />

              <Controller
                control={control}
                name={"Diagnóstico médico"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Pós-parto imediato (cesariana)" },
                      { description: "Pós-parto vaginal imediato" },
                    ]}
                    selectedValue={
                      patient ? answers["Diagnóstico médico"] : undefined
                    }
                    placeholder={"Diagnóstico Médico"}
                    onValueChange={onChange}
                    addInfo
                    modalTitle="Diagnóstico médico"
                    onClickSave={(value) => setDiagnosticComment(value)}
                    infoValue={diagnosticComment}
                    setValue={(value) => setDiagnosticComment(value)}
                  />
                )}
              />

              <Controller
                control={control}
                name={"Dieta prescrita"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Zero por 8 horas" },
                      { description: "Livre" },
                      { description: "Hipossódica" },
                      { description: "Hipoglicêmica" },
                      { description: "Laxativa" },
                      { description: "Zero" },
                      { description: "Branda" },
                      { description: "Líquida" },
                    ]}
                    selectedValue={
                      patient ? answers["Dieta prescrita"] : undefined
                    }
                    placeholder={"Dieta prescrita"}
                    onValueChange={onChange}
                    addInfo
                    modalTitle="Dieta prescrita"
                    onClickSave={(value) => setDietComment(value)}
                    infoValue={dietComment}
                    setValue={(value) => setDietComment(value)}
                  />
                )}
              />
            </VStack>
          </ScrollView>
        </KeyboardAvoidingView>

        {!isKeyboardShown && (
          <View style={styles.confirmButtonsContainer}>
            <Button
              bgColor={"green.900"}
              style={globalStyles.button}
              onPress={handleSubmit(submitForm)}
              isLoading={loading}
              isLoadingText="Carregando"
            >
              <Text style={globalStyles.primaryButtonText}>
                {patientId ? "Atualizar" : "Iniciar processo de enfermagem"}
              </Text>
            </Button>
            <Button
              style={[globalStyles.button, globalStyles.secondaryButton]}
              onPress={handleCancel}
            >
              <Text style={globalStyles.secondaryButtonText}>
                {patientId ? "Próximo" : "Cancelar"}
              </Text>
            </Button>
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

export default NewPuerperal;
