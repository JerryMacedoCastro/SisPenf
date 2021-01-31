import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  title: string;
}
const Header = (props: HeaderProps) => {
  const { title } = props;
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}></View>
      <BorderlessButton style={styles.goBack}>
        <Feather
          name="arrow-left"
          size={18}
          color="#51615F"
          onPress={navigation.goBack}
        />
        <Text style={styles.goBacktext} onPress={navigation.goBack}>
          Voltar
        </Text>
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginBottom: 100,
  },
  goBack: {
    height: 20,
    flexDirection: 'row',
    position: 'absolute',
    top: 30,
    alignSelf: 'flex-start',
  },

  goBacktext: {
    fontFamily: 'JosefinSans_700Bold',
    fontSize: 14,
    marginLeft: 4,
    color: '#51615F',
  },

  title: {
    fontFamily: 'JosefinSans_700Bold',
    fontSize: 14,
    color: '#51615F',
    position: 'absolute',
    top: 30,
  },
});
