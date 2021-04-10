import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DateHeader from '../components/DateHeader'
import Gradient from '../components/Gradient'

const FindPatient = () => {
  return (
    <View style={styles.container}>
      <Gradient />
      <DateHeader title="Buscar Paciente" />
      <Text>Find Patient</Text>
    </View>
  )
}

export default FindPatient

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BCE0DC',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
