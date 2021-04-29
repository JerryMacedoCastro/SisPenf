import React from "react";
import { Text, View } from "react-native";
import Header from "../Header";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { styles } from "./styles";
interface DateHeaderProps {
  title: string;
}

const index = ({ title }: DateHeaderProps): JSX.Element => {
  const today = format(new Date(), "PPPPp", { locale: ptBR });
  return (
    <View style={styles.container}>
      <Header title={title} destinyBack="Home" goBackOption textColor="#fff" />
      <Text style={styles.dateText}>{today}</Text>
    </View>
  );
};

export default index;
