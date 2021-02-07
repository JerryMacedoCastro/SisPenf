import React from 'react';
import { Feather } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { globalStyles } from '../Assets/GlobalStyles';
import { Icon, IconProps } from '@expo/vector-icons/build/createIconSet';
import iconSet from '@expo/vector-icons/build/Fontisto';

interface ButtonProps {
  title: string;
  icon?: any;
  color?: string;
  size?: number;
}

const Button = (props: ButtonProps) => {
  const { title, icon, color, size } = props;

  return (
    <RectButton style={[styles.button, globalStyles.primaryButton]}>
      <Text style={globalStyles.primaryButtonText}>{title}</Text>
      {icon && <Feather name={icon} color={color} size={size} />}
    </RectButton>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 42,
    marginTop: 10,
    width: '100%',
    fontFamily: 'JosefinSans_700Bold',
    padding: 16,
  },
});
