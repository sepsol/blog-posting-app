import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import IndexScreen from '../screens/IndexScreen';



const Stack = createStackNavigator();

function StackNavigator() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index" screenOptions={{ headerTitleAlign: 'center' }} >
        <Stack.Screen name="Index" component={IndexScreen} options={{ title: "My Blog Posts" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default StackNavigator;