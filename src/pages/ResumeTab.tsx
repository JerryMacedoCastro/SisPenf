import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FieldSet from 'react-native-fieldset';
import Fieldset from '../components/Fieldset';

import Gradient from '../components/Gradient';
import Header from '../components/Header';

export default function ResumeTab() {
  return (
    <View style={styles.container}>
      <Gradient />
      <Header title="Olá, Jessica" />
      <View style={styles.content}>
        <Fieldset label="Leito 01" value="Maria Ribeiro da Costa e Lima" />
        <Fieldset label="Leito 02" value="Maria Ribeiro da Costa e Lima" />
        <Fieldset label="Leito 03" value="Maria Ribeiro da Costa e Lima" />
        <Fieldset label="Leito 04" value="Maria Ribeiro da Costa e Lima" />
      </View>
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

  content: {
    backgroundColor: '#fff',
    width: '90%',
    padding: 8,
    position: 'relative',
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    height: '60%',
  },
});
