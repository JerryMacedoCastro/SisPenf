import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../Assets/GlobalStyles';
import Gradient from '../components/Gradient';
import pregnantImg from '../../assets/gravida.png'

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
        style={[globalStyles.button, globalStyles.primaryButton]}
        onPress={handleNavigateToLogin}
      >
        <Text style={globalStyles.primaryButtonText}>Login</Text>
      </RectButton>
      <RectButton
        style={[globalStyles.button, globalStyles.secondaryButton]}
        onPress={handleNavigateToRegister}
      >
        <Text style={globalStyles.secondaryButtonText}>Solicitar Acesso</Text>
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
});

export default Landing;
