import { Feather } from '@expo/vector-icons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import Gradient from '../components/Gradient';
import Header from '../components/Header';

const Login = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState('');

  const handleChangeUser = (text: string) => {
    setUser(text);
  };

  const handleChangePassword = (text: string) => {
    setPassword(text);
  };
  return (
    <View style={styles.container}>
      <Gradient />
      <Header title="Acessar" />
      <View style={styles.body}>
        <Text style={styles.subTitle}>SisPenf</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputStyle}
            autoCorrect={false}
            placeholder={'Usuário'}
            value={user}
            onChangeText={handleChangeUser}
            autoFocus
          />
          <Feather name="user" size={18} color="#51615F" />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputStyle}
            autoCorrect={false}
            secureTextEntry
            placeholder={'Senha'}
            onChangeText={handleChangePassword}
          />
          <Feather name="lock" size={18} color="#51615F" />
        </View>

        <RectButton style={{ height: 26 }}>
          <Text
            onPress={() => navigation.navigate('PasswordRecover')}
            style={styles.inputStyle}
          >
            Esqueceu a senha? Clique aqui.
          </Text>
        </RectButton>
      </View>
      <RectButton
        onPress={() => {
          Alert.alert('Warning', 'This function is not implemented yet');
        }}
        style={[styles.button, styles.primaryButton]}
      >
        <Text style={styles.primaryButtonText}>Login</Text>
      </RectButton>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BCE0DC',
    alignItems: 'center',
    justifyContent: 'center',
  },

  body: {
    flex: 1,
    alignItems: 'center',
    marginBottom: '50%',
  },
  subTitle: {
    fontFamily: 'JosefinSans_700Bold',
    color: '#51615F',
    fontSize: 26,
    padding: 20,
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
  button: {
    borderRadius: 25,
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
