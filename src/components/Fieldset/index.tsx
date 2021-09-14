// eslint-disable-next-line no-use-before-define
import React from "react";
import { Alert, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "../../Assets/GlobalStyles";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";

interface FieldsetProps {
  label: string;
  value: string;
  hospitalBed: number;
}

const index = (props: FieldsetProps): JSX.Element => {
  const navigation = useNavigation();

  const handlePress = async () => {
    try {
      await api.put(`/hospitalbed/${props.hospitalBed}`);
      Alert.alert("Alta Médica", "Paciente liberada");
      navigation.navigate("Home");
    } catch (error) {
      Alert.alert("Erro de conexão", "Verifique sua conexão com a internet");
    }
  };

  const { label, value } = props;
  return (
    <View style={styles.fieldSet}>
      <RectButton style={styles.button} onPress={handlePress}>
        <Text style={styles.legend}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
        <Feather name="log-out" size={20} color={colors.darkGreen} />
      </RectButton>
    </View>
  );
};

export default index;
