import React from 'react';
import Routes from './src/Routes';

import { useFonts } from 'expo-font';
import { JosefinSans_700Bold } from '@expo-google-fonts/josefin-sans';

export default function App() {
  const [fontsLoaded] = useFonts({
    JosefinSans_700Bold,
  });

  if (!!!fontsLoaded) {
    return null;
  }
  return <Routes />;
}
