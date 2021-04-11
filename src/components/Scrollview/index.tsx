import { useState } from 'react'
import { StyleSheet, FlatList, Text, View } from 'react-native'
import InfirmaryItem from '../InfirmaryItem'

const index = () => {
  const infirmaries = [
    { infirmary: '01' },
    { infirmary: '02' },
    { infirmary: '03' },
    { infirmary: '04' },
    { infirmary: '05' },
    { infirmary: '06' }
  ]

  const [selectedInfirmary, setSelectedInfirmary] = useState(
    infirmaries[0].infirmary
  )

  return (
    <>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitleText}>Acompanhamento de enfermarias</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          style={styles.container}
          horizontal
          data={infirmaries}
          renderItem={({ item }) => (
            <InfirmaryItem
              infirmary={`${item.infirmary}`}
              isSelected={item.infirmary === selectedInfirmary}
              handlePress={() => setSelectedInfirmary(item.infirmary)}
            />
          )}
          keyExtractor={(item) => item.infirmary}
        ></FlatList>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Segunda - feira, 21 de dezembro de 2020 - 15:05
        </Text>
      </View>
    </>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#34615C',

    padding: 2
  },
  listContainer: {
    height: 80
  },
  subtitleContainer: {
    width: '100%',
    backgroundColor: '#34615C',
    alignItems: 'center',
    height: '12%',
    justifyContent: 'flex-end'
  },
  subtitleText: {
    color: '#fff',
    fontFamily: 'JosefinSans_700Bold',
    fontSize: 18,
    padding: 6,
    marginBottom: 4
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#34615C',
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  footerText: {
    color: '#fff',
    fontFamily: 'JosefinSans_700Bold',
    fontSize: 10,
    marginBottom: 10
  }
})
