import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import { MEALS } from '../data/dummy-data'

const MealDetailsScreen = ({ navigation }) => {
  const mealId = navigation.getParam('mealId')
  const selectedMeal = MEALS.find((meal) => meal.id === mealId)

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
