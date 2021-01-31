import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Gradient from '../components/Gradient';
import Header from '../components/Header';

const PasswordRecover = () => {
  return (
    <View style={styles.container}>
      <Gradient />
      <Header title="Recuperar Senha" />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          autoCorrect={false}
          placeholder={'Email'}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          autoCorrect={false}
          placeholder={'CPF'}
        />
      </View>
    </View>
  );
};

export default PasswordRecover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BCE0DC',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#fff',
    paddingBottom: 10,
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 20,
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    color: '#27615A',
    fontFamily: 'JosefinSans_700Bold',
  },
});
