import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import StackNavigation from './src/screens/navigation/StackNavigation';

const App = () => {
  return (
    <View style={{flex:1}}>
      <Provider store={store}>
      <NavigationContainer>
     <StackNavigation />
      </NavigationContainer>
      </Provider>
    </View>
  )
}

export default App