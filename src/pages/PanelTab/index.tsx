import React, { useState } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import Gradient from "../../components/Gradient";
import Header from "../../components/Header";
import Button from "../../components/Button";
import PanelInfo from "../../components/PanelInfo";
import CustomModal from "../../components/CustomModal";
import { colors } from "../../Assets/GlobalStyles";
import { useAuth } from "../../contexts/auth";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const PanelTab = (): JSX.Element => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const { signOut } = useAuth();
  const handleNewPatientClick = () => {
    setModalIsVisible(!modalIsVisible);
  };
  const navigation = useNavigation();
  const handleNavigate = (to: string) => {
    navigation.navigate(to);
  };
  const handleLogout = () => {
    signOut();
  };
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Gradient />
        <Header />
        <Text
          style={{
            color: colors.darkGreen,
            fontFamily: "JosefinSans_700Bold",
            right: -20,
            fontSize: 18,
          }}
        >
          Visão geral do alojamento
        </Text>
        <View style={[styles.panelContent, styles.info]}>
          <View style={styles.circle}>
            <Text style={styles.percentage}>40%</Text>
          </View>

          <View style={styles.blockContainer}>
            <PanelInfo value={8} label="Puérperas" />
            <PanelInfo value={9} label="Recém nascidos" />
            <PanelInfo value={10} label="Enfermarias" />
            <PanelInfo value={12} label="Leitos" />
          </View>
        </View>
        <CustomModal
          modalVisible={modalIsVisible}
          onClose={handleNewPatientClick}
          firstButtonText="Admitir puérpera"
          secondButtonText="Admitir recém-nascido"
        />

        <View style={styles.content}>
          <Button
            title="Admitir paciente"
            icon="log-in"
            color={colors.white}
            size={24}
            handlePress={handleNewPatientClick}
          />
          <Button
            title="Processo de Enfermagem"
            icon="user-check"
            color={colors.white}
            size={24}
            handlePress={() => handleNavigate("FindPatient")}
          />
          <Button
            title="Pendências"
            icon="alert-triangle"
            color={colors.white}
            size={24}
          />
          <Button
            title="Acompanhar paciente"
            icon="file-text"
            color={colors.white}
            size={24}
          />
          <Button
            title="Intercorrências"
            icon="file-plus"
            color={colors.white}
            size={24}
          />
          <Button
            title="Alta médica"
            icon="user-x"
            color={colors.white}
            size={24}
          />
          <Button
            title="Sair"
            icon="log-out"
            color={colors.white}
            size={24}
            handlePress={handleLogout}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default PanelTab;
