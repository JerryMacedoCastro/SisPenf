import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface SeparatorProps {
  text: string;

}

const index = ({ text }: SeparatorProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.lines} />
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.lines} />
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%'

  },
  lines: {
    flex: 1,
    height: 1,
    backgroundColor: '#34615C'
  },
  text: {
    textAlign: 'center',
    paddingHorizontal: 10,
    color: "#34615C",
    fontSize: 16,
    fontFamily: 'JosefinSans_700Bold',
  }
})
