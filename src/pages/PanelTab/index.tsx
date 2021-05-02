import React, { useState } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import Gradient from "../../components/Gradient";
import Header from "../../components/Header";
import Button from "../../components/Button";
import PanelInfo from "../../components/PanelInfo";
import CustomModal from "../../components/CustomModal";

const PanelTab = (): JSX.Element => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const handleNewPatientClick = () => {
    setModalIsVisible(!modalIsVisible);
  };
  const navigation = useNavigation();
  const handleNavigate = (to: string) => {
    navigation.navigate(to);
  };
  return (
    <View style={styles.container}>
      <Gradient />
      <Header />
      <Text
        style={{
          color: "#27615A",
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
          <PanelInfo value={8} label="Recém nascidos" />
          <PanelInfo value={8} label="Enfermarias" />
          <PanelInfo value={8} label="Alessandra" />
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
          color="#FFF"
          size={24}
          handlePress={handleNewPatientClick}
        />
        <Button
          title="Processo de Enfermagem"
          icon="user-check"
          color="#FFF"
          size={24}
          handlePress={() => handleNavigate("FindPatient")}
        />
        <Button
          title="Pendências"
          icon="alert-triangle"
          color="#FFF"
          size={24}
        />
        <Button
          title="Acompanhar paciente"
          icon="file-text"
          color="#FFF"
          size={24}
        />
        <Button
          title="Intercorrências"
          icon="file-plus"
          color="#FFF"
          size={24}
        />
        <Button title="Alta médica" icon="user-x" color="#FFF" size={24} />
        <Button
          title="Sair"
          icon="log-out"
          color="#FFF"
          size={24}
          handlePress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
};

export default PanelTab;
