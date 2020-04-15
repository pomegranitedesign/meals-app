import React from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'

import MealItem from '../components/MealItem'
import { MEALS } from '../data/dummy-data'

const CategoryMeals = ({ navigation }) => {
  const handleRenderItem = (item) => (
    <MealItem
      title={item.item.title}
      onPress={() => {}}
      cookDuration={item.item.cookDuration}
      complexity={item.item.complexity}
      affordability={item.item.affordability}
      imageURL={item.item.imageURL}
    />
  )

  const categoryId = navigation.getParam('categoryId')
  const getCategoryMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  )

  return (
    <View style={styles.screen}>
      <FlatList
        data={getCategoryMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={handleRenderItem}
        style={{ width: '100%' }}
      />
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

export default CategoryMeals
