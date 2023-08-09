// eslint-disable-next-line no-use-before-define
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { colors } from "../../Assets/GlobalStyles";
import CustomModal from "../../components/CustomModal";
import { IPatientResponse } from "../../interfaces";
import { styles } from "./styles";

interface FieldsetProps {
  patient: IPatientResponse;
  value: string;
}

const Fieldset = (props: FieldsetProps): JSX.Element => {
  const navigation = useNavigation();
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const handleNewPatientClick = () => {
    setModalIsVisible(!modalIsVisible);
  };

  const goViewPuerperal = () => {
    navigation.navigate("ViewMaternalInfo", { patientId: props.patient.id });
    setModalIsVisible(false);
  };

  const goToEditPuerperal = () => {
    navigation.navigate("NewPuerperal", { patientId: props.patient.id });
    setModalIsVisible(false);
  };

  const goToDiagnosis = () => {
    navigation.navigate("Diagnosis", props.patient);
    setModalIsVisible(false);
  };

  const goToEvolution = () => {
    navigation.navigate("Evolution", { patientId: props.patient.id });
    setModalIsVisible(false);
  };

  return (
    <View style={styles.fieldSet}>
      <CustomModal
        modalVisible={modalIsVisible}
        onClose={handleNewPatientClick}
        firstButtonText="Visualizar status"
        secondButtonText="Editar puérpera"
        thirdButtonText="Realizar diagnóstico"
        fourthButtonText="Evoluir paciente"
        actionFirstButton={goViewPuerperal}
        actionSecondButton={goToEditPuerperal}
        actionThirdButton={goToDiagnosis}
        actionFourthButton={goToEvolution}
      />
      <RectButton style={styles.button} onPress={handleNewPatientClick}>
        <Text style={styles.value}>{props.value}</Text>
        <Feather name="log-out" size={20} color={colors.darkGreen} />
      </RectButton>
    </View>
  );
};

export default Fieldset;
