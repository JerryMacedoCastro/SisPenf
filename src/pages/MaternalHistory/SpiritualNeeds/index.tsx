import React, { useState } from "react";
import { View, Platform, KeyboardAvoidingView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

import { ISpiritualNeedsForm } from "../../../interfaces";
import { addAnswers } from "../../../services/answer.service";
import { useAuth } from "../../../contexts/auth";
import { styles } from "../styles";
import DateHeader from "../../../components/DateHeader";
import Gradient from "../../../components/Gradient";
import { ScrollView } from "react-native-gesture-handler";
import { globalStyles } from "../../../Assets/GlobalStyles";
import useKeyboardControll from "../../../hooks/useKeyboardControll";
import { RootStackParamList } from "../../../Routes/app.routes";
import { Controller, useForm } from "react-hook-form";
import PickerSelect from "../../../components/PickerSelect";
import { Button, Text, VStack } from "native-base";

type Props = StackScreenProps<RootStackParamList, "SpiritualNeeds">;

const index = ({ route }: Props): JSX.Element => {
  const { patientId } = route.params;
  const { user } = useAuth();
  const navigation = useNavigation();
  const isKeyboardShown = useKeyboardControll();
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit } = useForm<ISpiritualNeedsForm>();

  const submitForm = async (data: ISpiritualNeedsForm) => {
    try {
      setLoading(true);
      const answeredQuestions = [
        {
          question: "Angústia espiritual",
          option: data["Angústia espiritual"],
        },
        {
          question: "Risco de sofrimento espiritual",
          option: data["Risco de sofrimento espiritual"],
        },
        {
          question: "Sofrimento espiritual",
          option: data["Sofrimento espiritual"],
        },
      ];

      if (
        !data["Angústia espiritual"] ||
        !data["Risco de sofrimento espiritual"] ||
        !data["Sofrimento espiritual"]
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
        navigation.navigate("PsychobiologicNeeds", { patientId });
      }
    } catch (error) {
      Alert.alert("Ops", error.message);
    }
  };

  return (
    <>
      {!isKeyboardShown && (
        <DateHeader
          title="Necessidades Psicoespirituais"
          destinyBack="PsychologicalNeeds"
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
              <Text fontSize="lg" bold mb={4}>
                Religiosidade/espiritualidade
              </Text>
              <Controller
                control={control}
                name={"Angústia espiritual"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Presente" },
                      { description: "Ausente" },
                    ]}
                    placeholder={"Angústia espiritual"}
                    onValueChange={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name={"Sofrimento espiritual"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Presente" },
                      { description: "Ausente" },
                    ]}
                    placeholder={"Sofrimento espiritual"}
                    onValueChange={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name={"Risco de sofrimento espiritual"}
                render={({ field: { onChange } }) => (
                  <PickerSelect
                    options={[
                      { description: "Presente" },
                      { description: "Ausente" },
                    ]}
                    placeholder={"Angústia espiritual"}
                    onValueChange={onChange}
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
