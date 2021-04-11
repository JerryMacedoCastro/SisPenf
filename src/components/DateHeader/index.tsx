import { StyleSheet, Text, View } from 'react-native'
import Header from '../Header'
import {

  format

} from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface DateHeaderProps {
  title: string;
}

const index = ({ title }: DateHeaderProps) => {
  const today = format(new Date(), 'PPPPp', { locale: ptBR })
  return (
    <View style={styles.container}>
      <Header
        title={title}
        destinyBack="Home"
        goBackOption
        textColor="#fff"
      />
      <Text style={styles.dateText}>{today}</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    top: 0,
    backgroundColor: '#27615A',
    alignItems: 'center',
    justifyContent: 'center',
    height: 110,
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: 'absolute'
  },
  dateText: {
    position: 'absolute',
    bottom: 0,
    padding: 6,
    color: '#fff',
    fontFamily: 'JosefinSans_700Bold'
  }
})
