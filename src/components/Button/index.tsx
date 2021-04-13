
// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { StyleSheet, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { globalStyles } from '../../Assets/GlobalStyles'

interface ButtonProps {
  title: string;
  icon?: any;
  color?: string;
  size?: number;
  handlePress?: () => void;
}

const index = (props: ButtonProps) => {
  const { title, icon, color, size, handlePress } = props

  return (
    <RectButton
      style={[styles.button, globalStyles.primaryButton]}
      onPress={handlePress}
    >
      <Text style={globalStyles.primaryButtonText}>{title}</Text>
      {icon && <Feather name={icon} color={color} size={size} />}
    </RectButton>
  )
}

export default index

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    marginTop: 10,
    width: '100%',
    fontFamily: 'JosefinSans_700Bold',
    padding: 16
  }
})
