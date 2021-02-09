import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface FieldsetProps {
  label: string;
  value: string;
}

const Fieldset = (props: FieldsetProps) => {
  const { label, value } = props;
  return (
    <View style={styles.fieldSet}>
      <Text style={styles.legend}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
      <Feather name="user-check" size={20} color="#27615A" />
      <Feather name="alert-triangle" size={20} color="#27615A" />
      <Feather name="file-text" size={20} color="#27615A" />
      <Feather name="log-out" size={20} color="#27615A" />
      <Feather name="more-horizontal" size={20} color="#27615A" />
    </View>
  );
};

export default Fieldset;

const styles = StyleSheet.create({
  fieldSet: {
    margin: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderRadius: 15,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: '#27615A',
    paddingVertical: 10,
    marginBottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  legend: {
    position: 'absolute',
    top: -10,
    left: 10,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    color: '#27615A',
    fontFamily: 'JosefinSans_700Bold',
    fontSize: 12,
    padding: 2,
  },
  value: {
    color: '#27615A',
    fontFamily: 'JosefinSans_700Bold',
    fontSize: 12,
  },
});
