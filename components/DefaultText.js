import React from 'react'
import { Text, StyleSheet } from 'react-native'

const DefaultText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans',
    fontSize: 12,
  },
})

export default DefaultText
