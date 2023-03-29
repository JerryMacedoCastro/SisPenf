import React, { useEffect, useState } from "react";
import { View, Platform, KeyboardAvoidingView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { IPatientEvolution } from "../../interfaces/index";
import { addAnswers, getAnswers } from "../../services/answer.service";

import { Controller, useForm } from "react-hook-form";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../Routes/app.routes";
import { ScrollView } from "react-native-gesture-handler";

import { Button, Text, TextArea, VStack } from "native-base";
import { getAnswerByDescription } from "../../helpers/answers";
import { useAuth } from "../../contexts/auth";
import useKeyboardControll from "../../hooks/useKeyboardControll";
import DateHeader from "../../components/DateHeader";
import Gradient from "../../components/Gradient";
import { globalStyles } from "../../Assets/GlobalStyles";
import { styles } from "./styles";

type Props = StackScreenProps<RootStackParamList, "Evolution">;

const SpiritualNeeds = ({ route }: Props): JSX.Element => {
  const { patientId } = route.params;
  const { user } = useAuth();
  const navigation = useNavigation();
  const isKeyboardShown = useKeyboardControll();
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit, setValue, getValues } =
    useForm<IPatientEvolution>();

  const handleCancel = () => {
    navigation.navigate("Home");
  };

  const submitForm = async (data: IPatientEvolution) => {
    try {
      setLoading(true);
      const answeredQuestions = [
        {
          question: "Evolução",
          comment: data["Evolução"],
        },
      ];

      if (!data["Evolução"]) {
        Alert.alert("Ops", "Preencha a evolução");
        setLoading(false);
        return;
      }

      if (user) {
        await addAnswers(user.id, patientId, answeredQuestions);
        setLoading(false);
        navigation.navigate("Home", { patientId });
      }
    } catch (error) {
      Alert.alert("Ops", error.message);
    }
  };

  const getPatientInfo = async (id: number) => {
    const answersArray = await getAnswers(id, 8);

    setValue("Evolução", getAnswerByDescription("Evolução", answersArray));
  };

  useEffect(() => {
    if (patientId) getPatientInfo(Number(patientId));
  }, []);

  return (
    <>
      {!isKeyboardShown && (
        <DateHeader title="Evolução" destinyBack="FindPatient" />
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
                name={"Evolução"}
                render={({ field: { onChange } }) => (
                  <TextArea
                    size={"full"}
                    height={64}
                    width={"full"}
                    autoCompleteType={undefined}
                    placeholder={"Evolução"}
                    returnKeyType="next"
                    onChangeText={onChange}
                    value={getValues("Evolução")}
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

export default SpiritualNeeds;
