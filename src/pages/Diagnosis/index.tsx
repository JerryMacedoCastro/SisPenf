import React, { useEffect, useMemo, useRef, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
import { RectButton, TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";
import { VStack, Box, Divider, FlatList, Button, Radio } from "native-base";

import DateHeader from "../../components/DateHeader";
import Gradient from "../../components/Gradient";
import PickerSelectChecked from "../../components/PickerSelectChecked";
import useKeyboardControll from "../../hooks/useKeyboardControll";
import { colors, globalStyles } from "../../Assets/GlobalStyles";
import { hospitalBeds, infirmaries } from "../../data";
import { IParamsDiagnosis, keyValue } from "../../interfaces/index";
import { DiagnosisActions, DiagnosisJudgments } from "./diagnosisParams";
import { Controller, useForm } from "react-hook-form";

const Diagnosis = (): JSX.Element => {
  const isKeyboardShown = useKeyboardControll();
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit } = useForm<{ judgments: string[], actions: string[] }>();
  const [dataJudgments, setDataJudgments] = useState<{
    [x: string]: IParamsDiagnosis;
  }>();

  const generateInitialDataJudgments = () => {
    const aux: {
      [x: string]: IParamsDiagnosis;
    } = {};
    const namesFocus = Object.keys(DiagnosisJudgments);
    namesFocus.forEach((element) => {
      aux[element] = {
        judgments: [],
        actions: [],
      };
    });
    return aux;
  };

  useEffect(() => {
    setDataJudgments(generateInitialDataJudgments());
  }, []);

  const cardToDiagnosis = (focus: string) => {
    const params = DiagnosisJudgments[focus];

    if (params && dataJudgments) {
      const { judgments } = params;
      return (
        <Box
          borderWidth="1"
          borderRadius="md"
          my="2"
          key={focus}
          marginRight="2"
          width="100%"
        >
          <VStack space="4" divider={<Divider />} width="100%">
            <Box px="4" pt="4" fontWeight={"bold"}>
              {focus}
            </Box>
            <Box px="4">
              <VStack>
                <Radio.Group
                  defaultValue={dataJudgments[focus].judgments[0]}
                  name={"Judgments" + focus}
                >
                  {judgments.map((item, index) => {
                    return (
                      <Radio value={item} my={1} key={focus + item + index}>
                        {item}
                      </Radio>
                    );
                  })}
                </Radio.Group>
              </VStack>
            </Box>
            <Box
              px="4"
              pb="4"
              width="100%"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
            <PickerSelectChecked
                textButton="Ações ou meios"
                options={DiagnosisActions[focus].actions.map((item) => {
                  return {
                    description: item
                  }
                })}
                placeholder={"Ações ou meios"}
              /> 
            </Box>
          </VStack>
        </Box>
      );
    } else return <Text> Não encontrado </Text>;
  };

  return (
    <View style={styles.container}>
      <Gradient />
      {!isKeyboardShown && <DateHeader title="Diagnósticos/Resultados" />}
      <View style={styles.content}>
        <KeyboardAvoidingView
          style={styles.searchContainer}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Text style={styles.label}>Diangostico de Jessica</Text>
          <View style={{ display: "flex", width: "100%", padding: 10 }}>
            <FlatList
              data={Object.keys(DiagnosisJudgments)}
              renderItem={(item) => {
                const focusName = item.item;
                return cardToDiagnosis(focusName);
              }}
              keyExtractor={(item, index) => item + index}
              maxToRenderPerBatch={3}
              initialNumToRender={2}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default Diagnosis;
