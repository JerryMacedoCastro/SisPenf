import React, { useState } from "react";
import { View, Platform, KeyboardAvoidingView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

import { styles } from "../styles";
import CommonInput from "../../../components/Input/CommonInput";
import DateHeader from "../../../components/DateHeader";
import Gradient from "../../../components/Gradient";
import { globalStyles } from "../../../Assets/GlobalStyles";
import useKeyboardControll from "../../../hooks/useKeyboardControll";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../Routes/app.routes";
import { IFormattedDate, IPsycobiologicNeedsForm } from "../../../interfaces";
import { addAnswers } from "../../../services/answer.service";
import { useAuth } from "../../../contexts/auth";
import { Controller, useForm } from "react-hook-form";
import PickerSelect from "../../../components/PickerSelect";
import { Button, Text, VStack } from "native-base";
import { format } from "date-fns";

type Props = StackScreenProps<RootStackParamList, "PsychologicalNeeds">;

const index = ({ route }: Props): JSX.Element => {
  const { patientId } = route.params;
  const { user } = useAuth();
  const navigation = useNavigation();
  const isKeyboardShown = useKeyboardControll();
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit } = useForm<IPsycobiologicNeedsForm>();
  const [childbirthDate, setChildbirthDate] = useState<IFormattedDate>({
    date: new Date(),
    formattedDate: "",
  });
  const [showChildbirthDateModal, setShowChildbirthDateModal] = useState(false);
  const [childbirthTime, setChildbirthTime] = useState<IFormattedDate>({
    date: new Date(),
    formattedDate: new Date().toLocaleTimeString(),
  });
  const [showChildbirthTimeModal, setShowChildbirthTimeModal] = useState(false);
  const [drugsComment, setDrugsComment] = useState("");
  const [birthComment, setBirthComment] = useState("");

  const onChangeDate = (selectedDate: Date) => {
    const currentDate = selectedDate || childbirthDate;
    setShowChildbirthDateModal(Platform.OS === "ios");
    const formatted = format(currentDate, "dd/MM/yyyy");
    setChildbirthDate({ date: selectedDate, formattedDate: formatted });
  };

  const onChangeTime = (selectedDate: Date) => {
    const currentDate = selectedDate || childbirthTime;
    setShowChildbirthTimeModal(Platform.OS === "ios");
    const formatted = currentDate.toLocaleTimeString();
    setChildbirthTime({ date: selectedDate, formattedDate: formatted });
  };

  const submitForm = async (data: IPsycobiologicNeedsForm) => {
    try {
      setLoading(true);
      const answeredQuestions = [
        {
          question: "Gesta",
          comment: data.Gesta,
        },
        {
          question: "Para",
          comment: data.Para,
        },
        {
          question: "Aborto",
          comment: data.Aborto,
        },
        {
          question: "Número de filhos vivos",
          option: data["Número de filhos vivos"],
        },
        {
          question: "Pré-natal",
          optopn: data["Pré-natal"],
        },
        {
          question: "Número de consultas",
          comment: data["Número de consultas"],
        },
        {
          question: "Intercorrências na gestação",
          comment: data["Intercorrências na gestação"],
        },
        {
          question: "Doenças associadas",
          comment: data["Doenças associadas"],
        },
        {
          question: "Alergias",
          comment: data.Alergias,
        },
        {
          question: "Uso de medicamentos",
          comment: data["Uso de medicamentos"],
        },
        {
          question: "Anti-HIV",
          comment: data["Anti-HIV"],
        },
        {
          question: "VDRL",
          comment: data.VDRL,
        },
        {
          question: "Classificação sanguínea e fator RH",
          comment: data["Classificação sanguínea e fator RH"],
        },
        {
          question: "Outro",
          comment: data.Outro,
        },
        {
          question: "Uso de substâncias lícitas e/ou ilícitas",
          option: data["Uso de substâncias lícitas e/ou ilícitas"],
          comment: drugsComment,
        },
        {
          question: "Data do parto",
          comment: childbirthDate.formattedDate,
        },
        {
          question: "Hora do parto",
          comment: childbirthTime.formattedDate,
        },
        {
          question: "Gestação",
          option: data.Gestação,
        },
        {
          question: "Tipo de parto",
          option: data["Tipo de parto"],
          comment: birthComment,
        },
        {
          question: "RPMO",
          option: data.RPMO,
        },
        {
          question: "Tempo de bolsa rota até o parto",
          comment: data["Tempo de bolsa rota até o parto"],
        },
      ];

      if (
        !data.Gesta ||
        !data.Para ||
        !data.Aborto ||
        !data["Número de filhos vivos"] ||
        !data["Pré-natal"] ||
        !data["Número de consultas"] ||
        !data["Intercorrências na gestação"] ||
        !data["Doenças associadas"] ||
        !data.Alergias ||
        !data["Uso de medicamentos"] ||
        !data["Anti-HIV"] ||
        !data.VDRL ||
        !data["Classificação sanguínea e fator RH"] ||
        !data.Outro ||
        !data["Uso de substâncias lícitas e/ou ilícitas"] ||
        !data["Data do parto"] ||
        !data["Hora do parto"] ||
        !data.Gestação ||
        !data["Tipo de parto"] ||
        !data.RPMO ||
        !data["Tempo de bolsa rota até o parto"]
      ) {
        Alert.alert(
          "Preencha todos os campos",
          "Todos os campos são obrigatórios!"
        );
        setLoading(false);
        return;
      }

      if (user) {
        await addAnswers(user.id, patientId, answeredQuestions);
        setLoading(false);
        navigation.navigate("PartOne", { patientId });
      }
    } catch (error) {
      Alert.alert("Ops", error.message);
    }
  };

  return (
    <>
      {!isKeyboardShown && (
        <DateHeader
          title="Necessidades Psicobiológicas"
          destinyBack="SpiritualNeeds"
        />
      )}
      <SafeAreaView style={styles.container}>
        <Gradient />
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
                name="Gesta"
                render={({ field: { onChange } }) => (
                  <CommonInput
                    placeholder={"Gesta"}
                    returnKeyType="next"
                    onChangeText={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name="Para"
                render={({ field: { onChange } }) => (
                  <CommonInput
                    placeholder={"Para"}
                    returnKeyType="next"
                    onChangeText={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name="Aborto"
                render={({ field: { onChange } }) => (
                  <CommonInput
                    placeholder={"Aborto"}
                    returnKeyType="next"
                    onChangeText={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name="Número de filhos vivos"
                render={({ field: { onChange } }) => (
                  <CommonInput
                    placeholder={"Número de filhos vivos"}
                    returnKeyType="next"
                    onChangeText={onChange}
                    keyboardType="decimal-pad"
                  />
                )}
              />
              <Controller
                control={control}
                name={"Pré-natal"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[{ description: "Sim" }, { description: "Não" }]}
                    placeholder={"Pré-natal"}
                    onValueChange={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name={"Número de consultas"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Alto risco" },
                      { description: "Risco habitual" },
                    ]}
                    placeholder={"Número de consultas"}
                    onValueChange={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name="Intercorrências na gestação"
                render={({ field: { onChange } }) => (
                  <CommonInput
                    placeholder={"Intercorrências na gestação"}
                    returnKeyType="next"
                    onChangeText={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name="Doenças associadas"
                render={({ field: { onChange } }) => (
                  <CommonInput
                    placeholder={"Doenças associadas"}
                    returnKeyType="next"
                    onChangeText={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name="Alergias"
                render={({ field: { onChange } }) => (
                  <CommonInput
                    placeholder={"Alergias"}
                    returnKeyType="next"
                    onChangeText={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name="Uso de medicamentos"
                render={({ field: { onChange } }) => (
                  <CommonInput
                    placeholder={"Uso de medicamentos"}
                    returnKeyType="next"
                    onChangeText={onChange}
                  />
                )}
              />
              <Text fontSize="lg" bold mb={4}>
                Resultado de exames laboratoriais:
              </Text>
              <Controller
                control={control}
                name="Anti-HIV"
                render={({ field: { onChange } }) => (
                  <CommonInput
                    placeholder={"Anti-HIV"}
                    returnKeyType="next"
                    onChangeText={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name="VDRL"
                render={({ field: { onChange } }) => (
                  <CommonInput
                    placeholder={"VDRL"}
                    returnKeyType="next"
                    onChangeText={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name="Classificação sanguínea e fator RH"
                render={({ field: { onChange } }) => (
                  <CommonInput
                    placeholder={"Classificação sanguínea e fator RH"}
                    returnKeyType="next"
                    onChangeText={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name="Outro"
                render={({ field: { onChange } }) => (
                  <CommonInput
                    placeholder={"Outro"}
                    returnKeyType="next"
                    onChangeText={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name={"Uso de substâncias lícitas e/ou ilícitas"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "álcool" },
                      { description: "cigarro" },
                      { description: "drogas" },
                    ]}
                    placeholder={"Uso de substâncias lícitas e/ou ilícitas"}
                    onValueChange={onChange}
                    addInfo
                    modalTitle="Uso de substâncias lícitas e/ou ilícitas"
                    onClickSave={(value) => setDrugsComment(value)}
                    infoValue={drugsComment}
                  />
                )}
              />

              <Text fontSize="lg" bold mb={4}>
                Dados do parto:
              </Text>
              <CommonInput
                placeholder={"Data do parto"}
                value={childbirthDate.formattedDate}
                returnKeyType="next"
                onFocus={() => setShowChildbirthDateModal(true)}
                showSoftInputOnFocus={false}
              />
              {showChildbirthDateModal && (
                <DateTimePicker
                  value={childbirthDate.date}
                  placeholderText="Data do parto"
                  mode={"date"}
                  onChange={(_event: DateTimePickerEvent, date?: Date) =>
                    date ? onChangeDate(date) : null
                  }
                  dateFormat="day month year"
                />
              )}
              <CommonInput
                placeholder={"Hora do parto"}
                value={childbirthTime.formattedDate}
                returnKeyType="next"
                onFocus={() => setShowChildbirthTimeModal(true)}
                showSoftInputOnFocus={false}
              />
              {showChildbirthTimeModal && (
                <DateTimePicker
                  value={childbirthTime.date}
                  placeholderText="Hora do parto"
                  mode={"time"}
                  onChange={(_event: DateTimePickerEvent, date?: Date) =>
                    date ? onChangeTime(date) : null
                  }
                />
              )}
              <Controller
                control={control}
                name={"Gestação"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Única" },
                      { description: "Gemelar" },
                      { description: "Trigemelar" },
                    ]}
                    placeholder={"Gestação"}
                    onValueChange={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name={"Tipo de parto"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Cesariana" },
                      { description: "Vaginal" },
                      { description: "Episiotomia" },
                      { description: "Laceração" },
                      { description: "Episiorrafia" },
                    ]}
                    placeholder={"Tipo de parto"}
                    onValueChange={onChange}
                    addInfo
                    modalTitle="Tipo de parto"
                    onClickSave={(value) => setBirthComment(value)}
                    infoValue={birthComment}
                  />
                )}
              />
              <Controller
                control={control}
                name={"RPMO"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[{ description: "Sim" }, { description: "Não" }]}
                    placeholder={"RPMO"}
                    onValueChange={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name="Tempo de bolsa rota até o parto"
                render={({ field: { onChange } }) => (
                  <CommonInput
                    placeholder={"Tempo de bolsa rota até o parto"}
                    returnKeyType="next"
                    onChangeText={onChange}
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
              <Text style={globalStyles.primaryButtonText}>Continuar</Text>
            </Button>
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

export default index;
