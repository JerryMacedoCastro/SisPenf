import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Fieldset from '../Fieldset';

export default function PatientsList() {
  return (
    <View style={styles.content}>
      <Fieldset label="Leito 01" value="Maria Ribeiro da Costa e Lima" />
      <Fieldset label="Leito 02" value="Maria Ribeiro da Costa e Lima" />
      <Fieldset label="Leito 03" value="Maria Ribeiro da Costa e Lima" />
      <Fieldset label="Leito 04" value="Maria Ribeiro da Costa e Lima" />
    </View>
  );
}

const styles = StyleSheet.create({
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
