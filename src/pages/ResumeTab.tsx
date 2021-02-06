import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Gradient from '../components/Gradient';
import Header from '../components/Header';

export default function ResumeTab() {
  return (
    <View style={styles.container}>
      <Gradient />
      <Header title="Olá, Jessica" />
      <Text>Resumo das enfermarias</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BCE0DC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
