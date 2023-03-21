// eslint-disable-next-line no-use-before-define
import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "../../Assets/GlobalStyles";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import CustomModal from "../../components/CustomModal";
import { IPatientResponse } from "../../interfaces";

interface FieldsetProps {
  label: string;
  value: string;
  hospitalBed: number;
  patient: IPatientResponse;
}

const index = (props: FieldsetProps): JSX.Element => {
  const navigation = useNavigation();
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const handleNewPatientClick = () => {
    setModalIsVisible(!modalIsVisible);
  };

  const goEditPuerperal = () => {
    navigation.navigate("NewPuerperal");
  };

  const goDiagnosis = () => {
    navigation.navigate("Diagnosis", props.patient);
  };

  const { label, value } = props;
  return (
    <View style={styles.fieldSet}>
      <CustomModal
        modalVisible={modalIsVisible}
        onClose={handleNewPatientClick}
        firstButtonText="Editar puérpera"
        secondButtonText="Realizar Diagnóstico"
        actionFirstButton={goEditPuerperal}
        actionSecondButton={goDiagnosis}
      />
      <RectButton style={styles.button} onPress={handleNewPatientClick}>
        <Text style={styles.legend}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
        <Feather name="log-out" size={20} color={colors.darkGreen} />
      </RectButton>
    </View>
  );
};

export default index;
