import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Gradient from '../components/Gradient';

import TabsNavigation from './TabsNavigation';
import Header from '../components/Header';

const Home = () => {
  return (
    <>
      <TabsNavigation />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BCE0DC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
