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
    <View style={styles.container}>
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
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 20,
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    marginTop: 10,
  },
  goBack: {
    flex: 1,
    alignItems: 'flex-start',
    width: '40%',
    height: 20,
    flexDirection: 'row',
  },

  goBacktext: {
    fontFamily: 'JosefinSans_700Bold',
    fontSize: 14,
    marginLeft: 4,
    color: '#51615F',
  },
  title: {
    width: '55%',
    fontFamily: 'JosefinSans_700Bold',
    fontSize: 14,
    color: '#51615F',
  },
});
