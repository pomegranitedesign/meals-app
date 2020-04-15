import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native'
import { Platform } from 'react-native'

const CategoryGridTile = ({ title, onPress, backgroundColor }) => {
  const Touchable =
    Platform.OS === 'android' && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity

  return (
    <View style={styles.gridItem}>
      <Touchable onPress={onPress}>
        <View style={{ backgroundColor, ...styles.container }}>
          <Text numberOfLines={2} style={styles.title}>
            {title}
          </Text>
        </View>
      </Touchable>
    </View>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },

  container: {
    flex: 1,
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: 'flex-end',
  },

  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 16,
  },
})

export default CategoryGridTile
