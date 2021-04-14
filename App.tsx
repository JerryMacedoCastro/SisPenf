// eslint-disable-next-line no-use-before-define
import React from 'react'
import Routes from './src/Routes'
import { useFonts } from 'expo-font'
// eslint-disable-next-line camelcase
import { JosefinSans_700Bold } from '@expo-google-fonts/josefin-sans'

const App = () => {
  const [fontsLoaded] = useFonts({
    JosefinSans_700Bold
  })

  if (!fontsLoaded) {
    return null
  }
  return <Routes />
}

export default App
