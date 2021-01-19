import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import pregnantImg from './assets/gravida.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SisPenf</Text>
      <Image source={pregnantImg} />
      <StatusBar style="auto" />
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

  title: {
    fontSize: 100,
    color: '#34615C',
    padding: 2,
    position: 'absolute',
    top: 20,
    fontFamily: 'Josefin Sans'
    
  }
});
