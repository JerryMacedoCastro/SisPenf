
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Fieldset from '../Fieldset'

const index = () => {
  return (

    <View
      style={styles.content}
    >
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          position: 'relative'
        }}>
        <Fieldset label="Leito 01" value="Maria Ribeiro da Costa e Lima" />
        <Fieldset label="Leito 02" value="Maria Ribeiro da Costa e Lima" />
        <Fieldset label="Leito 03" value="Maria Ribeiro da Costa e Lima" />
        <Fieldset label="Leito 04" value="Maria Ribeiro da Costa e Lima" />
        <Fieldset label="Leito 04" value="Maria Ribeiro da Costa e Lima" />
        <Fieldset label="Leito 04" value="Maria Ribeiro da Costa e Lima" />
        <Fieldset label="Leito 04" value="Maria Ribeiro da Costa e Lima" />
        <Fieldset label="Leito 04" value="Maria Ribeiro da Costa e Lima" />
        <Fieldset label="Leito 04" value="Maria Ribeiro da Costa e Lima" />
        <Fieldset label="Leito 04" value="Maria Ribeiro da Costa e Lima" />
        <Fieldset label="Leito 04" value="Maria Ribeiro da Costa e Lima" />
        <Fieldset label="Leito 04" value="Maria Ribeiro da Costa e Lima" />
        <Fieldset label="Leito 04" value="Maria Ribeiro da Costa e Lima" />
        <Fieldset label="Leito 04" value="Maria Ribeiro da Costa e Lima" />
        <Fieldset label="Leito 04" value="Maria Ribeiro da Costa e Lima" />
        <Fieldset label="Leito 04" value="Maria Ribeiro da Costa e Lima" />
      </ScrollView>
    </View>)
}
export default index

const styles = StyleSheet.create({
  content: {

    backgroundColor: '#fff',
    width: '90%',
    padding: 6,
    borderRadius: 25,
    height: '70%'

  }
})
