import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RectButton, TextInput } from 'react-native-gesture-handler'
import Gradient from '../components/Gradient'
import { globalStyles } from '../Assets/GlobalStyles'

import Header from '../components/Header'

const Login = () => {
  const [user, setUser] = useState<string>('')
  // eslint-disable-next-line no-unused-vars
  const [password, setPassword] = useState('')
  const navigation = useNavigation()

  const handleChangeUser = (text: string) => {
    setUser(text)
  }

  const handleChangePassword = (text: string) => {
    setPassword(text)
  }
  return (
    <View style={styles.container}>
      <Gradient />
      <Header goBackOption={true} />

      <Text style={styles.subTitle}>SisPenf</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          autoCorrect={false}
          placeholder={'Usuário'}
          value={user}
          onChangeText={handleChangeUser}
          autoFocus
        />
        <Feather name="user" size={18} color="#51615F" />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          autoCorrect={false}
          secureTextEntry
          placeholder={'Senha'}
          onChangeText={handleChangePassword}
        />
        <Feather name="lock" size={18} color="#51615F" />
      </View>

      <RectButton
        onPress={() => {
          navigation.navigate('Home')
        }}
        style={[globalStyles.button, globalStyles.primaryButton]}
      >
        <Text style={globalStyles.primaryButtonText}>Acessar</Text>
      </RectButton>
      <RectButton style={{ height: 26, marginBottom: 20, marginTop: 20 }}>
        <Text
          onPress={() => navigation.navigate('PasswordRecover')}
          style={styles.inputStyle}
        >
          Esqueceu a senha? Clique aqui.
        </Text>
      </RectButton>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#BCE0DC',
    alignItems: 'center',
    justifyContent: 'center'

  },

  subTitle: {
    fontFamily: 'JosefinSans_700Bold',
    color: '#51615F',
    fontSize: 26,
    padding: 20
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#fff',
    paddingBottom: 10,
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 20,
    marginBottom: 10
  },
  inputStyle: {
    flex: 1,
    color: '#27615A',
    fontFamily: 'JosefinSans_700Bold'
  }
})
