// eslint-disable-next-line no-use-before-define
import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "../../Assets/GlobalStyles";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import CustomModal from "../../components/CustomModal";

interface FieldsetProps {
  label: string;
  value: string;
  hospitalBed: number;
}

const index = (props: FieldsetProps): JSX.Element => {
  const navigation = useNavigation();
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const handleNewPatientClick = () => {
    setModalIsVisible(!modalIsVisible);
  };

  // const handlePress = async () => {
  //   try {
  //     await api.put(`/hospitalbed/${props.hospitalBed}`);
  //     Alert.alert("Alta Médica", "Paciente liberada");
  //     navigation.navigate("Home");
  //   } catch (error) {
  //     Alert.alert("Erro de conexão", "Verifique sua conexão com a internet");
  //   }
  // };

  const goEditPuerperal = () => {
    navigation.navigate("NewPuerperal");
  };

  const goDiagnosis = () => {
    navigation.navigate("Diagnosis");
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
