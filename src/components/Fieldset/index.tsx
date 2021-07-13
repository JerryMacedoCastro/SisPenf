// eslint-disable-next-line no-use-before-define
import React from "react";
import { Alert, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "../../Assets/GlobalStyles";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

interface FieldsetProps {
  label: string;
  value: string;
}

const index = (props: FieldsetProps): JSX.Element => {
  const navigation = useNavigation();

  const handlePress = () => {
    Alert.alert("Alta Médica", "Paciente liberada");
    navigation.navigate("Home");
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
