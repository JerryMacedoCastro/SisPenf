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
  value: string;
  patientId: number;
}

const Fieldset = (props: FieldsetProps): JSX.Element => {
  const navigation = useNavigation();

  const handlePress = async () => {
    try {
      navigation.navigate("NewPuerperal", { patientId: props.patientId });
    } catch (error) {
      Alert.alert("Erro de conexão", "Verifique sua conexão com a internet");
    }
  };

  const { value } = props;
  return (
    <View style={styles.fieldSet}>
      <RectButton style={styles.button} onPress={handlePress}>
        <Text style={styles.value}>{value}</Text>
        <Feather name="log-out" size={20} color={colors.darkGreen} />
      </RectButton>
    </View>
  );
};

export default Fieldset;
