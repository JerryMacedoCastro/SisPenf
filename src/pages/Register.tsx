import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';

import Gradient from '../components/Gradient';
import Header from '../components/Header';

const Register = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [role, setRole] = useState('');
  const [registerNumber, setRegisterNumber] = useState('');

  const handleSubmit = () => {
    Alert.alert('Not Implemented', `${name} ${cpf} ${role} ${registerNumber}`);
  };
  return (
    <>
      <Gradient />
      <Header title="Solicitar Acesso" />
      <View style={styles.body}>
        <Text style={styles.subTitle}>SisPenf</Text>
        <TextInput
          autoFocus
          id="nome"
          placeholder="Nome"
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          id="cpf"
          placeholder="CPF (Somente números)"
          style={styles.input}
          value={cpf}
          keyboardType="numeric"
          onChangeText={(text) => setCpf(text)}
        />
        <TextInput
          id="cargo"
          placeholder="Cargo"
          style={styles.input}
          value={role}
          onChangeText={(text) => setRole(text)}
        />
        <TextInput
          id="registro"
          placeholder="Numero do registro"
          keyboardType="numeric"
          style={styles.input}
          value={registerNumber}
          onChangeText={(text) => setRegisterNumber(text)}
        />
        <RectButton
          style={[styles.button, styles.primaryButton]}
          onPress={handleSubmit}
        >
          <Text style={styles.primaryButtonText}>Enviar</Text>
        </RectButton>
      </View>
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
  },
  subTitle: {
    fontFamily: 'JosefinSans_700Bold',
    color: '#51615F',
    fontSize: 26,
    padding: 20,
  },

  input: {
    backgroundColor: '#ffF',
    width: '80%',
    marginBottom: 10,
    height: 50,
    borderRadius: 4,
    fontFamily: 'JosefinSans_700Bold',
    padding: 4,
  },
  button: {
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginBottom: 40,
    width: '80%',
    fontFamily: 'JosefinSans_700Bold',
  },
  primaryButton: {
    backgroundColor: '#34615C',
  },
  primaryButtonText: {
    color: '#FFF',
    fontSize: 16,
    marginLeft: 16,
    fontWeight: '700',
    fontFamily: 'JosefinSans_700Bold',
  },
});
