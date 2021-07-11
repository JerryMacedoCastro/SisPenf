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
import { Form } from '@unform/mobile';
import { FormHandles, SubmitHandler } from "@unform/core";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { colors, globalStyles } from "../../Assets/GlobalStyles";
import CommonInput from "../../components/CommonInput";
import DateHeader from "../../components/DateHeader";
import Picker from "../../components/Picker";
import useKeyboardControll from "../../hooks/useKeyboardControll";
import {
  keyValue,
  IInfirmariesResponse,
  IHospitalBedResponse,
} from "../../interfaces";
import Gradient from "../../components/Gradient";
import api from "../../services/api";
import { useAuth } from "../../contexts/auth";


interface IFormPatient {
  name: string;
  birthdate: string;
  diagnostic: string;
}

const NewPuerperal = (): JSX.Element => {
  const [infirmary, setInfirmary] = useState<number>(0);
  const [bedsPickerDisabled, setBedPickerDisabled] = useState(true);
  const [hospitalBed, setHospitalBed] = useState(0);
  const [infirmaries, setInfirmaries] = useState<keyValue[]>([]);
  const [beds, setBeds] = useState<keyValue[]>([]);
  const isKeyboardShown = useKeyboardControll();
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const { user } = useAuth();

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
        keyValueBeds = [...keyValueBeds, keyValueBed];
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


  const handleSubmit: SubmitHandler<IFormPatient> = async (formData) => {
    const { name, birthdate, diagnostic } = formData;
    const data = {
      name,
      birthdate,
      bed: hospitalBed,
    }
    if (hospitalBed === 0) {
      Alert.alert("Dados inválidos", "Seleciona e enfermaria e o leito");
      return;
    }
    try {
      const response = await api.post("/patient", data);
      console.log(response);
      if (response.status === 200) {
        const answerData = {
          userId: user?.id,
          patientId: response.data.id,
          questionId: 1,
          options: [],
          comment: diagnostic,
        }



        navigation.navigate("PsychologicalNeeds", { infirmary, hospitalBed });
      }
      else {
        Alert.alert("Problema de conexão", "Verifique a conexão com a internet");
      }
    } catch (error) {
      Alert.alert("Erro", error.message)
    }
  }

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
                disabled={bedsPickerDisabled}
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
              <Form ref={formRef} onSubmit={handleSubmit} >

                <CommonInput name="name" placeholder="Nome" returnKeyType="next" />
                <CommonInput name="diagnostic" placeholder="Diagnótico médico" returnKeyType="next" />
                <CommonInput name="diet" placeholder="Dieta prescrita" returnKeyType="next" />
                <CommonInput
                  name="birthdate"
                  placeholder="Data de nascimento"
                  returnKeyType="next"
                />
                <CommonInput name="maritalStatus" placeholder="Estado civil" returnKeyType="next" />
                <CommonInput name="education" placeholder="Escolaridade" returnKeyType="next" />
                <CommonInput name="ocupation" placeholder="Ocupação" returnKeyType="go" />
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
