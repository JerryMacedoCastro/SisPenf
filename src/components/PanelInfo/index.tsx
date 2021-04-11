
import { StyleSheet, Text, View } from 'react-native'
interface PanelInfoProps {
  value: number;
  label: string;
}
const index = (props: PanelInfoProps) => {
  const { value, label } = props

  return (
    <View style={styles.block}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  block: {
    display: 'flex',
    flexDirection: 'column',
    width: '40%',
    alignItems: 'center'
  },

  value: {
    color: '#27615A',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'JosefinSans_700Bold'
  },
  label: {
    color: '#27615A',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'JosefinSans_700Bold'
  }
})
