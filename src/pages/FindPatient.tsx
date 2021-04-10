import React, { useRef } from 'react'
import { Feather } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import DateHeader from '../components/DateHeader'
import Gradient from '../components/Gradient'
import Separator from '../components/Separator'

const FindPatient = () => {

  //<TextInput> or others dont work here
  const searchInput = useRef<any>(null)
  const handleSearchPress = () => {
    if (searchInput && searchInput.current) {
      searchInput.current.focus();
    }
  }

  return (
    <View style={styles.container}>
      <Gradient />
      <DateHeader title="Buscar Paciente" />
      <View>
        <Text style={styles.label}>Buscar paciente pelo nome</Text>
        <View style={styles.inputContainer}>
          <TextInput ref={searchInput} placeholder={"Digite o nome do paciente"} style={styles.input} />
          <Feather name={"search"} color={"#34615C"} size={24} onPress={handleSearchPress} />
        </View>
      </View>
      <View>
        <Separator text="Ou" />
      </View>
    </View>
  )
}

export default FindPatient

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BCE0DC',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    top: 0,
    width: '100%',
    height: '100%',
    minHeight: '100%'
  },
  label: {
    color: "#34615C",
    alignSelf: 'flex-start',
    marginLeft: 6,
    marginBottom: 4,
    fontSize: 16,
    fontFamily: 'JosefinSans_700Bold',
  },
  inputContainer: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-around",
    width: '90%',
    backgroundColor: '#fff',
    paddingHorizontal: 1,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#34615C',
  },
  input: {
    width: '80%',
    color: '#34615C',
  },

})
