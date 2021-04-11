import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet } from 'react-native'

const index = () => {
  return (
    <LinearGradient
      colors={['#fff', 'transparent']}
      style={styles.background}
    />
  )
}

export default index

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%'
  }
})
