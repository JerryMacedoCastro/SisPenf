import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import pregnantImg from '../../assets/gravida.png';
import Gradient from '../components/Gradient';

const Landing = () => {
  const navigation = useNavigation();

  const handleNavigateToLogin = () => {
    navigation.navigate('Login');
  };

  const handleNavigateToRegister = () => {
    navigation.navigate('Register');
  };
  return (
    <View style={styles.container}>
      <Gradient />

      <Text style={styles.title}>SisPenf</Text>
      <Image source={pregnantImg} />

      <RectButton
        style={[styles.button, styles.primaryButton]}
        onPress={handleNavigateToLogin}
      >
        <Text style={styles.primaryButtonText}>Login</Text>
      </RectButton>
      <RectButton
        style={[styles.button, styles.secondaryButton]}
        onPress={handleNavigateToRegister}
      >
        <Text style={styles.secondaryButtonText}>Solicitar Acesso</Text>
      </RectButton>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BCE0DC',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 18,
    color: '#34615C',
    padding: 2,
    position: 'absolute',
    top: 20,
    fontFamily: 'JosefinSans_700Bold',
  },

  button: {
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginTop: 10,
    width: '85%',
    fontFamily: 'JosefinSans_700Bold',
  },

  primaryButton: {
    backgroundColor: '#34615C',
  },

  secondaryButton: {
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#34615C',
  },

  primaryButtonText: {
    color: '#FFF',
    fontSize: 16,
    marginLeft: 16,
    fontWeight: '700',
  },

  secondaryButtonText: {
    color: '#34615C',
    fontSize: 16,
    marginLeft: 16,
    fontWeight: '700',
  },
});

export default Landing;
