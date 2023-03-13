import React, { useEffect, useMemo, useRef, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
import { RectButton, TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";
import { VStack, Box, Divider, FlatList, Button, Radio } from "native-base";

import DateHeader from "../../components/DateHeader";
import Gradient from "../../components/Gradient";
import Separator from "../../components/Separator";
import PickerInfirmary from "../../components/Picker";
import PatiensList from "../../components/PatientsList";
import useKeyboardControll from "../../hooks/useKeyboardControll";
import { colors, globalStyles } from "../../Assets/GlobalStyles";
import { hospitalBeds, infirmaries } from "../../data";
import { IParamsDiagnosis, keyValue } from "../../interfaces/index";
import { useNavigation } from "@react-navigation/native";
import { DiagnosisParams } from "./diagnosisParams";

const Diagnosis = (): JSX.Element => {
  const isKeyboardShown = useKeyboardControll();
  const [loading, setLoading] = useState(false);
  const [dataDiagnostic, setDataDiagnostic] = useState<{
    [x: string]: IParamsDiagnosis;
  }>();

  const generateInitialDataDiagnostic = () => {
    const aux: {
      [x: string]: IParamsDiagnosis;
    } = {};
    const namesFocus = Object.keys(DiagnosisParams);
    namesFocus.forEach((element) => {
      aux[element] = {
        judgments: [],
        actions: [],
      };
    });
    return aux;
  };

  useEffect(() => {
    setDataDiagnostic(generateInitialDataDiagnostic());
  }, []);

  const cardToDiagnosis = (focus: string) => {
    const params = DiagnosisParams[focus];

    if (params && dataDiagnostic) {
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
          <VStack space="4" divider={<Divider />}>
            <Box px="4" pt="4" fontWeight={"bold"}>
              {focus}
            </Box>
            <Box px="4">
              <VStack>
                <Radio.Group
                  defaultValue={dataDiagnostic[focus].judgments[0]}
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
              alignContent="center"
              justifyContent="center"
              backgroundColor="red"
            >
              <Button
                bgColor={"green.900"}
                style={globalStyles.button}
                isLoading={loading}
                isLoadingText="Carregando"
              >
                <Text style={globalStyles.primaryButtonText}>
                  Ações ou Meios
                </Text>
              </Button>
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
              data={Object.keys(DiagnosisParams).slice(0, 7)}
              renderItem={(item) => {
                const focusName = item.item;
                return cardToDiagnosis(focusName);
              }}
              keyExtractor={(item, index) => item + index}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default Diagnosis;
