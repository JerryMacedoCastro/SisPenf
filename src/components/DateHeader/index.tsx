import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import Header from '../Header';

interface DateHeaderProps {
  title: string;
}

const DateHeader = ({ title }: DateHeaderProps) => {
  moment().locale('pt-br');

  let now = moment().format('LLLL');
  return (
    <View style={styles.container}>
      <Header
        title={title}
        destinyBack="Home"
        goBackOption
        textColor="#fff"
      />
      <Text style={styles.dateText}>{now}</Text>
    </View>
  );
};

export default DateHeader;

const styles = StyleSheet.create({
  container: {
    top: 0,
    backgroundColor: '#27615A',
    alignItems: 'center',
    justifyContent: 'center',
    height: 110,
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: 'absolute',
  },
  dateText: {
    position: 'absolute',
    bottom: 0,
    padding: 6,
    color: '#fff',
    fontFamily: 'JosefinSans_700Bold',
  },
});
