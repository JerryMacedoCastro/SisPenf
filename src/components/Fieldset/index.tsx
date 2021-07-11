// eslint-disable-next-line no-use-before-define
import React from "react";
import { Text, Touchable, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "../../Assets/GlobalStyles";
import { RectButton } from "react-native-gesture-handler";

interface FieldsetProps {
  label: string;
  value: string;
}

const index = (props: FieldsetProps): JSX.Element => {
  const { label, value } = props;
  return (
    <View style={styles.fieldSet}>
      <RectButton style={styles.button}>

        <Text style={styles.legend}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
        <Feather name="log-out" size={20} color={colors.darkGreen} />

      </RectButton>
    </View>
  );
};

export default index;
