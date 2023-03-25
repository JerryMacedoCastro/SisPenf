import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  Platform,
  Alert,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { format } from "date-fns";
import { useForm, Controller } from "react-hook-form";
import { VStack, Button, KeyboardAvoidingView } from "native-base";

import { styles } from "./styles";
import { colors, globalStyles } from "../../Assets/GlobalStyles";
import CommonInput from "../../components/Input/CommonInput";
import DateHeader from "../../components/DateHeader";
import Picker from "../../components/Picker";
import useKeyboardControll from "../../hooks/useKeyboardControll";
import {
  keyValue,
  IInfirmariesResponse,
  IHospitalBedResponse,
  IPatientResponse,
  INewPuerperalForm,
  IFormattedDate,
} from "../../interfaces";
import Gradient from "../../components/Gradient";
import { useAuth } from "../../contexts/auth";
import PickerSelect from "../../components/PickerSelect";
import { createPatient, getPatientById } from "../../services/patient.service";
import { getInfirmaries } from "../../services/infirmary.service";
import { getHospitalbedByNumber } from "../../services/hospitalBed.service";
import { addAnswers, getAnswers } from "../../services/answer.service";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../Routes/app.routes";

type Props = StackScreenProps<RootStackParamList, "NewPuerperal">;

const NewPuerperal = ({ route }: Props): JSX.Element => {
  const { patientId } = route.params;
  const [patient, setPatient] = useState<IPatientResponse | null>(null);
  const [infirmary, setInfirmary] = useState<number>(0);
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
  const [bedsPickerDisabled, setBedPickerDisabled] = useState(true);
  const [dietComment, setDietComment] = useState("");
  const [diagnosticComment, setDiagnosticComment] = useState("");
  const [hospitalBed, setHospitalBed] = useState(0);
  const [infirmaries, setInfirmaries] = useState<keyValue[]>([]);
  const [beds, setBeds] = useState<keyValue[]>([]);
  const isKeyboardShown = useKeyboardControll();
  const navigation = useNavigation();
  const [answers, setAnswers] = useState<INewPuerperalForm>({
    "Data de admissão": "",
    "Data de nascimento": "",
    "Diagnóstico médico": "",
    "Dieta prescrita": "",
    Nome: "",
  });
  const { control, handleSubmit } = useForm<INewPuerperalForm>();
  const { user } = useAuth();

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

  async function fetchInfirmariesData() {
    let keyValueInfirmaries: keyValue[] = [];
    try {
      const infirmariesResponse: IInfirmariesResponse[] =
        await getInfirmaries();

      infirmariesResponse.forEach((infirmary: IInfirmariesResponse) => {
        const keyValueInfirmary: keyValue = {
          label: infirmary.description,
          value: infirmary.id,
        };
        keyValueInfirmaries = [...keyValueInfirmaries, keyValueInfirmary];
      });
      setInfirmaries(keyValueInfirmaries);
    } catch (error) {
      throw new Error("Erro ao buscar enfermarias", error.message);
    }
  }

  useEffect(() => {
    try {
      fetchInfirmariesData();
    } catch (error) {
      Alert.alert("Ops", error.message);
    }
  }, []);

  const handleChangeInfirmary = async (item: string) => {
    const value = Number(item);
    setBedPickerDisabled(true);
    setBeds([]);
    setHospitalBed(0);
    setInfirmary(value);

    let keyValueBeds: keyValue[] = [];
    try {
      const bedsResponse: IHospitalBedResponse[] = await getHospitalbedByNumber(
        value
      );
      bedsResponse.forEach((bed: IHospitalBedResponse) => {
        const keyValueBed: keyValue = {
          label: bed.description,
          value: bed.id,
        };
        if (!bed.isFilled) keyValueBeds = [...keyValueBeds, keyValueBed];
      });
      setBeds(keyValueBeds);

      setBedPickerDisabled(false);
    } catch (error) {
      Alert.alert("Problema de conexão!", error.message);
    }
  };

  const handleCancel = () => {
    navigation.navigate("Home");
  };

  const onChangeBirthDate = (selectedDate: Date) => {
    const currentDate = selectedDate || birthDate;
    setShowBirthDateModal(Platform.OS === "ios");
    const formatted = format(currentDate, "dd/MM/yyyy");
    setBirthDate({ date: selectedDate, formattedDate: formatted });
  };

  const onChangeAdmissionDate = (selectedDate: Date) => {
    const currentDate = selectedDate || admissionDate;
    setShowAdmissionDateModal(Platform.OS === "ios");
    const formatted = format(currentDate, "dd/MM/yyyy");
    setAdmissionDate({ date: selectedDate, formattedDate: formatted });
  };

  const submitForm = async (data: INewPuerperalForm) => {
    setLoading(true);

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
    if (infirmary === 0 || hospitalBed === 0) {
      Alert.alert(
        "Preencha todos os campos",
        "Selecione o leito e a enfermaria!"
      );
      setLoading(false);
      return;
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
        data.Nome,
        birthDate.date,
        admissionDate.date,
        hospitalBed
      );

      if (patient.id && user) {
        await addAnswers(user.id, patient.id, answeredQuestions);
        navigation.navigate("PsychologicalNeeds", {
          patientId: patient.id,
          infirmaryId: infirmary,
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
      handleChangeInfirmary(patient.hospitalBed.infirmary.id.toString());
      setHospitalBed(patient.hospitalBed.id);
      onChangeBirthDate(new Date(patient.birthDate));
      onChangeAdmissionDate(new Date(patient.admissionDate));
    }
  }, [patient]);

  return (
    <>
      {!isKeyboardShown && <DateHeader title="Admitir puérpera" />}
      <SafeAreaView style={styles.container}>
        <Gradient />
        <View style={styles.buttonsContainer}>
          {infirmaries.length > 0 ? (
            <Picker
              placeholder="Enfermaria"
              items={infirmaries}
              onValueChange={async (item) => await handleChangeInfirmary(item)}
              defaultValue={`Enfermaria 10 ${infirmary}`}
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
            />
          )}
        </View>

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
                    value={patient?.name}
                  />
                )}
              />
              <CommonInput
                placeholder={"Data de nascimento"}
                value={birthDate.formattedDate}
                returnKeyType="next"
                onFocus={() => setShowBirthDateModal(true)}
                showSoftInputOnFocus={false}
              />
              {showBirthDateModal && (
                <DateTimePicker
                  value={birthDate.date}
                  placeholderText="Data de nascimento"
                  mode={"date"}
                  onChange={(_event: DateTimePickerEvent, date?: Date) =>
                    date ? onChangeBirthDate(date) : null
                  }
                  dateFormat="day month year"
                />
              )}

              <CommonInput
                placeholder={"Data de admissão"}
                value={admissionDate.formattedDate}
                returnKeyType="next"
                onFocus={() => setShowAdmissionDateModal(true)}
                showSoftInputOnFocus={false}
              />
              {showAdmissionDateModal && (
                <DateTimePicker
                  value={admissionDate.date}
                  placeholderText="Data de admissão"
                  mode={"date"}
                  onChange={(_event: DateTimePickerEvent, date?: Date) =>
                    date ? onChangeAdmissionDate(date) : null
                  }
                  dateFormat="day month year"
                />
              )}

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
                Iniciar processo de enfermagem
              </Text>
            </Button>
            <Button
              style={[globalStyles.button, globalStyles.secondaryButton]}
              onPress={handleCancel}
            >
              <Text style={globalStyles.secondaryButtonText}>Cancelar</Text>
            </Button>
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

export default NewPuerperal;
