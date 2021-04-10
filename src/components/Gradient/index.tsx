import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet } from 'react-native';

const Gradient = () => {
  return (
    <LinearGradient
      colors={['#fff', 'transparent']}
      style={styles.background}
    />
  );
};

export default Gradient;

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
});
