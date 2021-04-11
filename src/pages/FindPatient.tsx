import React, { useRef } from 'react'
import { Feather } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'
import { RectButton, TextInput } from 'react-native-gesture-handler'
import DateHeader from '../components/DateHeader'
import Gradient from '../components/Gradient'
import Separator from '../components/Separator'
import useKeyboardControll from '../hooks/useKeyboardControll'
import PickerInfirmary from '../components/Picker'
import { Rect } from 'react-native-svg'
import { globalStyles } from '../Assets/GlobalStyles'
import { BottomTabBar } from '@react-navigation/bottom-tabs'

const FindPatient = () => {
  const hospitalBeds = [
    { label: "Leito 01", value: 1 },
    { label: "Leito 02", value: 2 },
    { label: "Leito 03", value: 3 },
    { label: "Leito 04", value: 4 },
    { label: "Leito 05", value: 4 },
    { label: "Leito 333", value: 4 },
    { label: "Leito 1234", value: 4 },
    { label: "Leito 34344", value: 4 },
    { label: "Leito 4444", value: 4 },
    { label: "Leito 00", value: 4 },
  ]
  const { isKeyboardShown } = useKeyboardControll();

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
      {!isKeyboardShown &&
        <>
          <View style={{ paddingVertical: '10%' }}>
            <Separator text="Ou" />
          </View>
          <View style={styles.pickerButtonsContainer}>
            <PickerInfirmary placeholder="Selecione a enfermaria" items={hospitalBeds} />
            <PickerInfirmary placeholder="Selecione o leito" items={hospitalBeds} />
          </View>
          <View style={styles.buttonsContainer}>

            <RectButton style={[globalStyles.button, globalStyles.primaryButton]}>
              <Text style={globalStyles.primaryButtonText}>Buscar</Text>
            </RectButton>
            <RectButton style={[globalStyles.button, globalStyles.secondaryButton]}>
              <Text style={globalStyles.secondaryButtonText}>Cancelar</Text>
            </RectButton>
          </View>
        </>
      }
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
    position: 'absolute',
    bottom: 0,
    top: 0,
    width: '100%',
    height: '100%',
    minHeight: '100%',
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
  pickerButtonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  buttonsContainer: {
    position: 'absolute',
    width: '100%',

    alignItems: 'center',
    bottom: 10,

  }

})
