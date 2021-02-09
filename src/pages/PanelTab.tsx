import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

import Gradient from '../components/Gradient';
import Header from '../components/Header';
import Button from '../components/Button';
import PanelInfo from '../components/PanelInfo';

const PanelTab = () => {
  return (
    <View style={styles.container}>
      <Gradient />
      <Header title="Olá, jessica" />
      <Text
        style={{
          color: '#27615A',
          fontFamily: 'JosefinSans_700Bold',
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
          <PanelInfo value={8} label="Número de puérperas" />
          <PanelInfo value={8} label="Número de puérperas" />
          <PanelInfo value={8} label="Número de puérperas" />
          <PanelInfo value={8} label="Número de puérperas" />
        </View>
      </View>
      <View style={styles.content}>
        <Button title="Admitir paciente" icon="log-in" color="#FFF" size={24} />
        <Button
          title="Processo de Enfermagem"
          icon="user-check"
          color="#FFF"
          size={24}
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
        <Button title="Alta médica" icon="log-out" color="#FFF" size={24} />
      </View>
    </View>
  );
};

export default PanelTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BCE0DC',
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    backgroundColor: '#fff',
    width: '90%',
    padding: 8,
    position: 'relative',
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
  },
  panelContent: {
    backgroundColor: '#fff',
    width: '80%',
    padding: 8,
    position: 'relative',
    borderRadius: 25,
  },

  info: {
    height: 112,
    marginBottom: 25,
    borderWidth: 2,
    borderColor: '#27615A',
  },

  circle: {
    width: 120,
    height: 120,
    borderRadius: 100,
    position: 'absolute',
    backgroundColor: '#fff',
    top: -6,
    left: -20,
    borderWidth: 2,
    borderColor: '#27615A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentage: {
    color: '#27615A',
    fontSize: 30,
    fontWeight: '700',
    fontFamily: 'JosefinSans_700Bold',
  },

  blockContainer: {
    width: 250,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    right: -110,
    top: -12,
  },
});
