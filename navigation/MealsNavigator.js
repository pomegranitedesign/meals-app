import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Platform } from 'react-native'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoriesMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import Colors from '../constants/Colors'
import { CATEGORIES } from '../data/dummy-data'

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: 'Meal Categories',
      },
    },
    CategoryMeals: {
      screen: CategoriesMealsScreen,
      navigationOptions: (navigationData) => {
        const categoryId = navigationData.navigation.getParam('categoryId')
        const selectedCategory = CATEGORIES.find(
          (category) => category.id === categoryId
        )
        return {
          headerTitle: selectedCategory.title,
        }
      },
    },
    MealDetails: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' && Colors.primary,
      },
      headerTintColor: Platform.OS === 'android' && '#ffffff',
    },
  }
)

export default createAppContainer(MealsNavigator)
