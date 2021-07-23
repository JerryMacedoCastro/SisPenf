import React, { useState } from "react";
import { View, Text, Platform, KeyboardAvoidingView } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "../styles";
import useKeyboardControll from "../../../hooks/useKeyboardControll";
import DateHeader from "../../../components/DateHeader";
import SelectableButton from "../../../components/SelectableButton";
import Gradient from "../../../components/Gradient";
import { globalStyles } from "../../../Assets/GlobalStyles";
import { IExam } from "../../../interfaces";
import { physicalExam } from "../../../data";

const index = (): JSX.Element => {
  const navigation = useNavigation();
  const isKeyboardShown = useKeyboardControll();
  const examsPartTwo = physicalExam.filter((exam) => exam.part === 2);
  const [exams, setExams] = useState(examsPartTwo);
  const handleContinue = () => {
    navigation.navigate("Home");
  };

  const handleSelectExam = (exam: IExam) => {
    const oldExam = exams.find((item) => item.value === exam.value);
    if (oldExam) {
      const newExam: IExam = {
        id: oldExam.id,
        value: oldExam.value,
        isSelected: !oldExam.isSelected,
        part: oldExam.part,
      };
      const newExams = exams.map((item) => {
        if (item === oldExam) return newExam;
        else return item;
      });
      setExams(newExams);
    }
  };

  return (
    <>
      {!isKeyboardShown && (
        <DateHeader title="Exame físico parte 2" destinyBack="PartOne" />
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
            <View style={styles.formContainer}>
              {exams.map((exam) => {
                return (
                  <SelectableButton
                    key={exam.id}
                    exam={exam}
                    handlePress={(exam) => handleSelectExam(exam)}
                  />
                );
              })}
            </View>
          </ScrollView>
        </KeyboardAvoidingView>

        {!isKeyboardShown && (
          <View style={styles.confirmButtonsContainer}>
            <RectButton
              style={[globalStyles.button, globalStyles.primaryButton]}
              onPress={handleContinue}
            >
              <Text style={globalStyles.primaryButtonText}>Continuar</Text>
            </RectButton>
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

export default index;
