import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import PropTypes from 'prop-types'

import MealItem from './MealItem'

const MealList = ({ data, navigation }) => {
  const handleRenderListItem = (item) => (
    <MealItem
      title={item.item.title}
      onPress={() =>
        navigation.navigate('MealDetails', { mealId: item.item.id })
      }
      cookDuration={item.item.cookDuration}
      complexity={item.item.complexity}
      affordability={item.item.affordability}
      imageURL={item.item.imageURL}
    />
  )

  return (
    <View style={styles.list}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.id}
        renderItem={handleRenderListItem}
        style={{ width: '100%' }}
      />
    </View>
  )
}

MealList.propTypes = {
  data: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
})

export default MealList
