import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Gradient from '../components/Gradient';
import Header from '../components/Header';

const PanelTab = () => {
  return (
    <View style={styles.container}>
      <Gradient />
      <Header title="Olá, jessica" />
      <Text>Painel geral</Text>
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
});
