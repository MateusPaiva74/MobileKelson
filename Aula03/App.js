import { View, Text } from 'react-native'
import React from 'react'
import DetailsScreen from './src/screens/DetailsScreen'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigation from './src/navigation/AppNavigation'

const App = () => {
  return (
    
      <NavigationContainer>
        <AppNavigation/>
      </NavigationContainer>
      
  )
}

export default App