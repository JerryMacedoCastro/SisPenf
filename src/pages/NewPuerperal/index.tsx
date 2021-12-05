import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ActivityIndicator,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Form } from "@unform/mobile";
import { FormHandles, SubmitHandler } from "@unform/core";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker, {
  AndroidEvent,
  Event,
} from "@react-native-community/datetimepicker";
import { format } from "date-fns";

import { styles } from "./styles";
import { colors, globalStyles } from "../../Assets/GlobalStyles";
import CommonInput from "../../components/Input/CommonInput";
import SimpleInput from "../../components/Input/SimpleInput";
import DateHeader from "../../components/DateHeader";
import Picker from "../../components/Picker";
import useKeyboardControll from "../../hooks/useKeyboardControll";
import {
  keyValue,
  IInfirmariesResponse,
  IHospitalBedResponse,
  IPatientResponse,
  IQuestionResponse,
} from "../../interfaces";
import Gradient from "../../components/Gradient";
import api from "../../services/api";
import { useAuth } from "../../contexts/auth";
import RNPickerSelect from "../../components/PickerSelect";

interface IFormPatient {
  name: string;
  birthdate: string;
  diagnostic: string;
  diet: string;
  maritalStatus: string;
  education: string;
  ocupation: string;
}

interface IFormattedDate {
  date: Date;
  formattedDate: string;
}

const NewPuerperal = (): JSX.Element => {
  const [infirmary, setInfirmary] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [date, setDate] = useState<IFormattedDate>({
    date: new Date(),
    formattedDate: "",
  });
  const [showDateModal, setShowDateModal] = useState(false);
  const [bedsPickerDisabled, setBedPickerDisabled] = useState(true);
  const [hospitalBed, setHospitalBed] = useState(0);
  const [questions, setQuestions] = useState<IQuestionResponse[]>([]);
  const [infirmaries, setInfirmaries] = useState<keyValue[]>([]);
  const [beds, setBeds] = useState<keyValue[]>([]);
  const isKeyboardShown = useKeyboardControll();
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const { user } = useAuth();
  const questionsType = 1;

  useEffect(() => {
    let keyValueInfirmaries: keyValue[] = [];

    async function fetchData() {
      try {
        const { data } = await api.get("/infirmary");
        const infirmariesResponse: IInfirmariesResponse[] = data;
        infirmariesResponse.forEach((infirmary: IInfirmariesResponse) => {
          const keyValueInfirmary: keyValue = {
            label: infirmary.description,
            value: infirmary.id,
          };
          keyValueInfirmaries = [...keyValueInfirmaries, keyValueInfirmary];
        });
        setInfirmaries(keyValueInfirmaries);
      } catch (error) {
        Alert.alert("Problema de conexão!", error.message);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const questionsForm = await api.get(`question/${questionsType}`);
        setQuestions(questionsForm.data);
      } catch (error) {
        Alert.alert("Problema de conexão!", error.message);
      }
    }
    fetchData();
  }, []);

  const handleChangeInfirmary = async (item: keyValue) => {
    const { value } = item;
    setBedPickerDisabled(true);
    setBeds([]);
    setHospitalBed(0);
    setInfirmary(value);

    let keyValueBeds: keyValue[] = [];
    try {
      const { data } = await api.get(`/hospitalbed/${value}`);
      const bedsResponse: IHospitalBedResponse[] = data;
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
    navigation.navigate("PsychologicalNeeds", { patientId: 29 });
  };

  const handleSubmit: SubmitHandler<IFormPatient> = async (formData) => {
    console.log(formData);
    console.log("usuario: " + user?.id);
    console.log("Enfermaria " + infirmary);
    console.log("Leito " + hospitalBed);
    console.log("Data " + date.formattedDate);
    return;
    if (infirmary === 0 || hospitalBed === 0) {
      Alert.alert(
        "Preencha todos os campos",
        "Selecione o leito e a enfermaria!"
      );
      return;
    }
    try {
      const { data } = await api.post("/patient", {
        name: formData.name,
        birthdate: formData.birthdate,
        bed: hospitalBed,
      });
      const patient: IPatientResponse = data;
      if (data.id) {
        const { data } = await api.post("/answers", {
          patientId: patient.id,
          userId: user?.id,
          questions: {},
        });
      }
      navigation.navigate("PsychologicalNeeds", {
        patientId: patient.id,
        infirmaryId: infirmary,
      });

      navigation.navigate("PsychologicalNeeds", { patientId: patient.id });
    } catch (error) {
      Alert.alert("Problema de conexão!", error.message);
    }
  };

  const onChangeDate = (selectedDate: Date) => {
    const currentDate = selectedDate || date;
    setShowDateModal(Platform.OS === "ios");
    const formatted = format(currentDate, "dd/MM/yyyy");
    setDate({ date: selectedDate, formattedDate: formatted });
  };

  return (
    <>
      {!isKeyboardShown && <DateHeader title="Admitir puérpera" />}
      <SafeAreaView style={styles.container}>
        <Gradient />
        <View style={styles.buttonsContainer}>
          {infirmaries.length > 0 ? (
            <Picker
              placeholder="Selecione a enfermaria"
              items={infirmaries}
              handleChange={async (item) => await handleChangeInfirmary(item)}
            />
          ) : (
            <ActivityIndicator size="small" color={colors.darkGreen} />
          )}
          {infirmary !== 0 && bedsPickerDisabled && beds.length === 0 ? (
            <ActivityIndicator size="small" color={colors.darkGreen} />
          ) : (
            <Picker
              placeholder="Selecione o leito"
              items={beds}
              handleChange={(item) => setHospitalBed(item.value)}
              disabled={bedsPickerDisabled || beds.length === 0}
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
            <View style={styles.formContainer}>
              <Form ref={formRef} onSubmit={handleSubmit}>
                {!questions ? (
                  <ActivityIndicator size="small" color={colors.darkGreen} />
                ) : (
                  <>
                    <SimpleInput
                      label={"Nome"}
                      value={name}
                      returnKeyType="next"
                      onChangeText={(text) => setName(text)}
                    />
                    <SimpleInput
                      label={"Data de nascimento"}
                      value={date.formattedDate}
                      returnKeyType="next"
                      onFocus={() => setShowDateModal(true)}
                      showSoftInputOnFocus={false}
                    />
                    {showDateModal && (
                      <DateTimePicker
                        value={date.date}
                        mode={"date"}
                        display="default"
                        onChange={(_event: Event | AndroidEvent, date?: Date) =>
                          date ? onChangeDate(date) : null
                        }
                        dateFormat="day month year"
                      />
                    )}
                    {questions.map((question): JSX.Element => {
                      return question.options.length === 0 ? (
                        <CommonInput
                          key={question.id}
                          name={question.description}
                          placeholder={question.description}
                          returnKeyType="next"
                        />
                      ) : (
                        <RNPickerSelect
                          key={question.id}
                          name={question.description}
                          items={question.options.map((option) => {
                            return {
                              value: option.id,
                              label: option.description,
                            };
                          })}
                        />
                      );
                    })}
                  </>
                )}
              </Form>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>

        {!isKeyboardShown && (
          <View style={styles.confirmButtonsContainer}>
            <RectButton
              style={[globalStyles.button, globalStyles.primaryButton]}
              onPress={() => formRef?.current?.submitForm()}
            >
              <Text style={globalStyles.primaryButtonText}>
                Iniciar processo de enfermagem
              </Text>
            </RectButton>
            <RectButton
              style={[globalStyles.button, globalStyles.secondaryButton]}
              onPress={handleCancel}
            >
              <Text style={globalStyles.secondaryButtonText}>Cancelar</Text>
            </RectButton>
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

export default NewPuerperal;
