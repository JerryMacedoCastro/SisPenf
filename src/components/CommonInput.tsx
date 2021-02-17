import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const CommonInput = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        returnKeyType="next"
        blurOnSubmit
        style={styles.inputText}
        placeholder="Nome"
      ></TextInput>
    </View>
  );
};

export default CommonInput;

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomWidth: 3,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 20,
    borderColor: 'rgba(196, 196, 196, 0.7)',
    borderTopWidth: 0,
    elevation: 0,
    padding: 4,
    margin: 10,
  },
  inputText: {
    padding: 6,
    color: '#34615C',
  },
});
