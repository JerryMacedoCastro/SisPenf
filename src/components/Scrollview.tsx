import React from 'react';
import { ScrollView, StyleSheet, FlatList, Text, View } from 'react-native';

import InfirmaryItem from './InfirmaryItem';

const Scrollview = () => {
  const infirmaries = [
    { infirmary: '01' },
    { infirmary: '02' },
    { infirmary: '03' },
  ];

  const [selectedInfirmary, setSelectedInfirmary] = React.useState(
    infirmaries[0].infirmary
  );

  const handlehandle = () => {};

  return (
    <>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitleText}>Acompanhamento de enfermeiras</Text>
      </View>
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
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Segunda - feira, 21 de dezembro de 2020 - 15:05
        </Text>
      </View>
    </>
  );
};

export default Scrollview;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#34615C',
    width: '100%',

    padding: 2,
  },
  subtitleContainer: {
    width: '100%',
    backgroundColor: '#34615C',
    alignItems: 'center',
  },
  subtitleText: {
    color: '#fff',
    fontFamily: 'JosefinSans_700Bold',
    fontSize: 18,
    padding: 6,
    marginBottom: 4,
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#34615C',
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  footerText: {
    color: '#fff',
    fontFamily: 'JosefinSans_700Bold',
    fontSize: 10,
    marginBottom: 10,
  },
});