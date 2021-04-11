import { StyleSheet, Text, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

interface infirmaryItemProps {
  isSelected?: boolean;
  infirmary: string;
  handlePress: () => void;
}

const index = (props: infirmaryItemProps) => {
  const { isSelected, infirmary, handlePress } = props

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View
        style={isSelected ? [styles.item, styles.seletedItem] : styles.item}
      >
        <Text style={styles.itemText}>{`Enfermaria ${infirmary}`}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default index

const styles = StyleSheet.create({
  item: {
    width: 150,
    height: 30,
    alignItems: 'center',
    marginHorizontal: 20
  },

  seletedItem: {
    borderBottomWidth: 4,
    borderColor: '#BCE0DC'
  },
  itemText: {
    color: '#fff',
    fontFamily: 'JosefinSans_700Bold',
    fontSize: 18
  }
})
