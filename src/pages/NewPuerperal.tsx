import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { globalStyles } from '../Assets/GlobalStyles';
import CommonInput from '../components/CommonInput';
import DateHeader from '../components/DateHeader';
import Button from '../components/Button';

const NewPuerperal = () => {
  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <DateHeader />
        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.button, globalStyles.primaryButton]}>
            <Text style={globalStyles.primaryButtonText}>
              Selecionar enfermaria
            </Text>
            <Feather name="chevrons-down" color="#fff" size={18} />
          </RectButton>
          <RectButton style={[styles.button, globalStyles.primaryButton]}>
            <Text style={globalStyles.primaryButtonText}>Selecionar leito</Text>
            <Feather name="chevrons-down" color="#fff" size={18} />
          </RectButton>
        </View>

        <View style={styles.content}>
          <CommonInput />
          <CommonInput />
          <CommonInput />
          <CommonInput />
          <CommonInput />
          <CommonInput />
          <CommonInput />
          <CommonInput />
        </View>

        <View style={styles.confirmButtonsContainer}>
          <Button title="Confirmar" />
          <Button title="Cancelar" />
        </View>
      </ScrollView>
    </>
  );
};

export default NewPuerperal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#BCE0DC',
    width: '100%',
  },

  button: {
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 42,
    marginTop: 10,
    width: '45%',
    fontFamily: 'JosefinSans_700Bold',
    padding: 16,
  },

  content: {
    backgroundColor: 'rgb(220, 220, 220)',

    width: '90%',
    borderRadius: 20,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    padding: 16,
    marginTop: 100,
  },
  confirmButtonsContainer: {
    width: '90%',
  },
});
