// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Gradient from '../components/Gradient'
import Header from '../components/Header'
import Button from '../components/Button'
import PanelInfo from '../components/PanelInfo'
import CustomModal from '../components/CustomModal'
import { useNavigation } from '@react-navigation/native'

const PanelTab = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const handleNewPatientClick = () => {
    setModalIsVisible(!modalIsVisible)
  }
  const navigation = useNavigation()
  const handleNavigate = (to: string) => {
    navigation.navigate(to)
  }
  return (
    <View style={styles.container}>
      <Gradient />
      <Header />
      <Text
        style={{
          color: '#27615A',
          fontFamily: 'JosefinSans_700Bold',
          right: -20,
          fontSize: 18
        }}
      >
        Visão geral do alojamento
      </Text>
      <View style={[styles.panelContent, styles.info]}>
        <View style={styles.circle}>
          <Text style={styles.percentage}>40%</Text>
        </View>

        <View style={styles.blockContainer}>
          <PanelInfo value={8} label="Puérperas" />
          <PanelInfo value={8} label="Recém nascidos" />
          <PanelInfo value={8} label="Enfermarias" />
          <PanelInfo value={8} label="Alessandra" />
        </View>
      </View>
      <CustomModal
        modalVisible={modalIsVisible}
        onClose={handleNewPatientClick}
        firstButtonText="Admitir puérpera"
        secondButtonText="Admitir recém-nascido"
      />

      <View style={styles.content}>
        <Button
          title="Admitir paciente"
          icon="log-in"
          color="#FFF"
          size={24}
          handlePress={handleNewPatientClick}
        />
        <Button
          title="Processo de Enfermagem"
          icon="user-check"
          color="#FFF"
          size={24}
          handlePress={() => handleNavigate('FindPatient')}
        />
        <Button
          title="Pendências"
          icon="alert-triangle"
          color="#FFF"
          size={24}
        />
        <Button
          title="Acompanhar paciente"
          icon="file-text"
          color="#FFF"
          size={24}
        />
        <Button
          title="Intercorrências"
          icon="file-plus"
          color="#FFF"
          size={24}
        />
        <Button title="Alta médica" icon="log-out" color="#FFF" size={24} />
      </View>
    </View>
  )
}

export default PanelTab

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BCE0DC',
    alignItems: 'center',
    justifyContent: 'center'
  },

  content: {
    backgroundColor: '#fff',
    width: '90%',
    padding: 8,
    position: 'relative',
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center'
  },
  panelContent: {
    backgroundColor: '#fff',
    width: '80%',
    padding: 8,
    position: 'relative',
    borderRadius: 25
  },

  info: {
    height: 112,
    marginBottom: 25,
    borderWidth: 2,
    borderColor: '#27615A'
  },

  circle: {
    width: 120,
    height: 120,
    borderRadius: 100,
    position: 'absolute',
    backgroundColor: '#fff',
    top: -6,
    left: -20,
    borderWidth: 2,
    borderColor: '#27615A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  percentage: {
    color: '#27615A',
    fontSize: 40,
    fontWeight: '700',
    fontFamily: 'JosefinSans_700Bold'
  },

  blockContainer: {
    width: 250,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    right: -110,
    top: -12
  }
})
