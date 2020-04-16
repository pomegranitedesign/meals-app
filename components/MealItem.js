import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  ImageBackground,
} from 'react-native'

import DefaultText from '../components/DefaultText'

const MealItem = ({
  title,
  onPress,
  cookDuration,
  complexity,
  affordability,
  imageURL,
}) => {
  const Touchable =
    Platform.OS === 'android' && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity

  return (
    <View style={styles.mealItem}>
      <Touchable onPress={onPress}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground source={{ uri: imageURL }} style={styles.bgImage}>
              <Text style={styles.title}>{title}</Text>
            </ImageBackground>
          </View>

          <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
            <DefaultText>{cookDuration}m</DefaultText>
            <DefaultText>{complexity.toUpperCase()}</DefaultText>
            <DefaultText>{affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </Touchable>
    </View>
  )
}

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#cccccc',
    marginVertical: 10,
    borderRadius: 3,
  },

  mealRow: {
    flexDirection: 'row',
  },

  mealHeader: {
    height: '85%',
  },

  mealDetails: {
    height: '15%',
    padding: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    borderRadius: 3,
  },

  mealDetail: {
    fontSize: 12,
  },
})

export default MealItem
