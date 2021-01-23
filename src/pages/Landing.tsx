import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import pregnantImg from '../../assets/gravida.png';

const Landing = () => {
  const navigation = useNavigation();

  const handleNavigateToLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#fff', 'transparent']}
        style={styles.background}
      />

      <Text style={styles.title}>SisPenf</Text>
      <Image source={pregnantImg} />

      <RectButton
        style={[styles.button, styles.primaryButton]}
        onPress={handleNavigateToLogin}
      >
        <Text style={styles.primaryButtonText}>Login</Text>
      </RectButton>
      <RectButton style={[styles.button, styles.secondaryButton]}>
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
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  title: {
    fontSize: 35,
    color: '#34615C',
    padding: 2,
    position: 'absolute',
    top: 20,
  },

  button: {
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginTop: 10,
    width: '85%',
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
