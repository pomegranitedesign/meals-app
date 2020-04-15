import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Touchable,
  TouchableOpacity,
} from 'react-native'

import CategoryGridTile from '../components/CategoryGridTile'
import { CATEGORIES } from '../data/dummy-data'

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = (item) => (
    <CategoryGridTile
      title={item.item.title}
      backgroundColor={item.item.color}
      onPress={() =>
        navigation.navigate('CategoryMeals', { categoryId: item.item.id })
      }
    />
  )

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default CategoriesScreen
