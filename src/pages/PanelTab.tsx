import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Gradient from '../components/Gradient';
import Header from '../components/Header';
import Button from '../components/Button';

const PanelTab = () => {
  const data = [
    {
      name: 'Seoul',
      population: 21500000,
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Toronto',
      population: 2800000,
      color: '#F00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];
  return (
    <View style={styles.container}>
      <Gradient />
      <Header title="Olá, jessica" />
      <View style={[styles.content, styles.info]}></View>
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
  },

  info: {
    height: 100,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#27615A',
  },
});
