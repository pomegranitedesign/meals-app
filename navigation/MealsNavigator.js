import React from 'react'
import { Platform, View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoriesMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import FavouritesScreen from '../screens/FavouritesScreen'
import Colors from '../constants/Colors'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import HeaderButton from '../components/HeaderButton'
import FiltersScreen from '../screens/FiltersScreen'

const defaultNavigationStackOptions = {
  defaultNavigationOptions: {
    headerTintColor: Platform.OS === 'android' && '#ffffff',
    headerTitleStyle: {
      fontFamily: 'open-sans-bold',
    },
    headerBackTitleStyle: {
      fontFamily: 'open-sans',
    },
    headerStyle: {
      backgroundColor: Platform.OS === 'android' && Colors.primary,
    },
  },
}

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: (navigationOptions) => ({
        headerTitle: 'Meal Categories',
        headerLeft: (
          <View hitSlop={{ right: 10 }}>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Menu"
                iconName="ios-menu"
                onPress={() => navigationOptions.navigation.toggleDrawer()}
              />
            </HeaderButtons>
          </View>
        ),
      }),
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
    MealDetails: {
      screen: MealDetailsScreen,
      navigationOptions: (navigationData) => {
        const mealId = navigationData.navigation.getParam('mealId')
        const selectedMeal = MEALS.find((meal) => meal.id === mealId)
        return {
          headerTitle: selectedMeal.title,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Favourite"
                iconName="ios-star-outline"
                onPress={() => console.log('Mark as Favourite')}
              />
            </HeaderButtons>
          ),
        }
      },
    },
  },
  defaultNavigationStackOptions
)

const FavouriteStack = createStackNavigator(
  {
    Favourites: {
      screen: FavouritesScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Your Favourites',
        headerLeft: (
          <View hitSlop={{ right: 10 }}>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                iconName="ios-menu"
                onPress={() => navigation.toggleDrawer()}
              />
            </HeaderButtons>
          </View>
        ),
      }),
    },
    MealDetails: MealDetailsScreen,
  },
  defaultNavigationStackOptions
)

const tabConfigs = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-restaurant" size={25} color={tintColor} />
      ),
      tabBarColor: Colors.primary,
    },
  },
  Favourites: {
    screen: FavouriteStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-star" size={25} color={tintColor} />
      ),
      tabBarColor: Colors.primary,
    },
  },
}

const FiltersStack = createStackNavigator(
  {
    Filters: {
      screen: FiltersScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Filters',
        headerLeft: (
          <View hitSlop={{ right: 10 }}>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                iconName="ios-menu"
                onPress={() => navigation.toggleDrawer()}
              />
            </HeaderButtons>
          </View>
        ),
      }),
    },
  },
  {
    navigationOptions: {
      drawerLabel: 'Filters',
    },
    defaultNavigationStackOptions,
  }
)

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabConfigs, {
        activeColor: Colors.accent,
        shifting: true,
      })
    : createBottomTabNavigator(tabConfigs, {
        tabBarOptions: {
          showLabel: false,
          activeTintColor: Colors.accent,
          labelStyle: {
            fontFamily: 'open-sans-bold',
          },
        },
      })

const MainNavigator = createDrawerNavigator(
  {
    Favourites: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: 'Meals',
      },
    },
    Filters: FiltersStack,
  },
  {
    contentOptions: {
      activeTintColor: Colors.accent,
      labelStyle: {
        fontFamily: 'open-sans-bold',
      },
    },
  }
)

export default createAppContainer(MainNavigator)
