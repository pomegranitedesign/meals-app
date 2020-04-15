import React, { useState } from 'react'
import { StyleSheet, StatusBar } from 'react-native'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import { enableScreens } from 'react-native-screens'

import MealsNavigator from './navigation/MealsNavigator'

// TODO: Don't remove
// This will unlock screens
// Used for performance
enableScreens()

const _fetchFonts = () =>
  Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (!fontsLoaded)
    return (
      <AppLoading
        startAsync={_fetchFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(error) => console.error(error)}
      />
    )

  return (
    <>
      <StatusBar hidden />
      <MealsNavigator />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
