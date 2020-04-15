import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const MealDetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Meal DetailsScreen</Text>
      <Button title="Go Back Home" onPress={() => navigation.popToTop()} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default MealDetailsScreen
