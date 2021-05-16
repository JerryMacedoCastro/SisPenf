import React from "react";
import { Text, View } from "react-native";
import Header from "../Header";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { styles } from "./styles";
import { colors } from "../../Assets/GlobalStyles";
interface DateHeaderProps {
  title: string;
  destinyBack?: string;
}

const index = ({ title, destinyBack }: DateHeaderProps): JSX.Element => {
  const today = format(new Date(), "PPPPp", { locale: ptBR });
  return (
    <View style={styles.container}>
      <Header
        title={title}
        destinyBack={destinyBack || "Home"}
        goBackOption
        textColor={colors.white}
      />
      <Text style={styles.dateText}>{today}</Text>
    </View>
  );
};

export default index;
