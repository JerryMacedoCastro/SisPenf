import React from 'react';
import { StyleSheet, Text, TextInputProps, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
interface commonInputProps extends TextInputProps {
  title: string;
  value?: string;

}

const CommonInput = ({ title, value, ...rest }: commonInputProps) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        returnKeyType="next"
        style={styles.inputText}
        placeholder={title}
        value={value}
        {...rest}
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
    backgroundColor: '#fff'
  },

  inputText: {
    padding: 6,
    color: '#34615C',
  },
});