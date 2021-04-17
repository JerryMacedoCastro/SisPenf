
// eslint-disable-next-line no-use-before-define
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Fieldset from '../Fieldset'
import { patients } from '../../data'

const index = () => {
  return (

    <View
      style={styles.content}
    >
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          position: 'relative'
        }}>
        {patients.map((patient, index) => {
          return <Fieldset key={index} value={patient.name} label={`Leito ${(index + 1).toString()}`} />
        })}

      </ScrollView>
    </View>)
}
export default index

const styles = StyleSheet.create({
  content: {

    backgroundColor: '#fff',
    width: '90%',
    padding: 6,
    borderRadius: 25,
    height: '70%'

  }
})
