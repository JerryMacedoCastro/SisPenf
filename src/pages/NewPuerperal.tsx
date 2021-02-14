import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import DateHeader from '../components/DateHeader';

const NewPuerperal = () => {
  return (
    <>
      <View style={styles.container}>
        <DateHeader />

        <View style={styles.content}></View>
      </View>
    </>
  );
};

export default NewPuerperal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BCE0DC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: 'rgba(196, 196, 196, 0.7)',
    height: '60%',
    width: '90%',
    borderRadius: 20,
  },
});
