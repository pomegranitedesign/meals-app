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
            <Text>{cookDuration}m</Text>
            <Text>{complexity.toUpperCase()}</Text>
            <Text>{affordability.toUpperCase()}</Text>
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
  },

  mealRow: {
    flexDirection: 'row',
  },

  mealHeader: {
    height: '90%',
  },

  mealDetails: {
    height: '10%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },

  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },

  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 16,
    color: '#ffffff',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 15,
    textAlign: 'center',
  },
})

export default MealItem
