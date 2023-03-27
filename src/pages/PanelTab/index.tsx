import React from "react";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import Gradient from "../../components/Gradient";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { colors } from "../../Assets/GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text } from "native-base";

const PanelTab = (): JSX.Element => {
  const navigation = useNavigation();
  const handleNavigate = (to: string) => {
    navigation.navigate(to);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Gradient />
      <Header />
      <Text size={32} marginTop={16} fontSize="lg" bold mb={4}>
        Bem vindo(a)
      </Text>

      <ScrollView
        style={styles.content}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        <Button
          title="Admitir paciente"
          icon="log-in"
          color={colors.white}
          size={24}
          handlePress={() =>
            navigation.navigate("NewPuerperal", { patiendId: null })
          }
        />
        <Button
          title="Processo de Enfermagem"
          icon="user-check"
          color={colors.white}
          size={24}
          handlePress={() => handleNavigate("FindPatient")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PanelTab;
