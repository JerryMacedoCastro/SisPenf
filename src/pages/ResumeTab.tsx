
// eslint-disable-next-line no-use-before-define
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Gradient from '../components/Gradient'
import PatientsList from '../components/PatientsList'
import Scrollview from '../components/Scrollview'

const ResumeTab = () => {
  return (
    <View style={styles.container}>
      <Gradient />
      <Scrollview />
      <PatientsList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#BCE0DC',
    alignItems: 'center'

  }
})

export default ResumeTab
