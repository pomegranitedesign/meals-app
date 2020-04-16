import React from 'react'

import { MEALS } from '../data/dummy-data'
import MealList from '../components/MealList'

const CategoryMeals = ({ navigation }) => {
  const categoryId = navigation.getParam('categoryId')
  const categoryMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  )

  return <MealList data={categoryMeals} navigation={navigation} />
}

export default CategoryMeals
