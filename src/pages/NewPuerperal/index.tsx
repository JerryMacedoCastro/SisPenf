import React, { useEffect, useState } from "react";
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
import { useNavigation } from "@react-navigation/native";
import Gradient from "../../components/Gradient";
import api from "../../services/api";

const NewPuerperal = (): JSX.Element => {
  const [infirmary, setInfirmary] = useState<number>(0);

  const [bedsPickerDisabled, setBedPickerDisabled] = useState(true);
  const [hospitalBed, setHospitalBed] = useState(0);
  const [infirmaries, setInfirmaries] = useState<keyValue[]>([]);
  const [beds, setBeds] = useState<keyValue[]>([]);
  const isKeyboardShown = useKeyboardControll();
  const navigation = useNavigation();

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
  const handleStartProcess = () => {
    Alert.alert(infirmary + " " + hospitalBed);
    navigation.navigate("PsychologicalNeeds", { infirmary, hospitalBed });
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
              <CommonInput title="Diagnótico médico" returnKeyType="next" />
              <CommonInput title="Dieta prescrita" returnKeyType="next" />
              <CommonInput title="Nome" returnKeyType="next" />
              <CommonInput
                title="Idade"
                keyboardType="decimal-pad"
                returnKeyType="next"
              />
              <CommonInput title="Estado civil" returnKeyType="next" />
              <CommonInput title="Escolaridade" returnKeyType="next" />
              <CommonInput title="Ocupação" returnKeyType="go" />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>

        {!isKeyboardShown && (
          <View style={styles.confirmButtonsContainer}>
            <RectButton
              style={[globalStyles.button, globalStyles.primaryButton]}
              onPress={handleStartProcess}
            >
              <Text style={globalStyles.primaryButtonText}>
                Iniciar processo de enfermagem
              </Text>
            </RectButton>
            <RectButton
              style={[globalStyles.button, globalStyles.secondaryButton]}
              onPress={handleCancel}
            >
              <Text style={globalStyles.secondaryButtonText}>Cancelar </Text>
            </RectButton>
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

export default NewPuerperal;
