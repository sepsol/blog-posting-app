import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Index from '../screens/Index';



const Stack = createStackNavigator();

function StackNavigator() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index" screenOptions={{ headerTitleAlign: 'center' }} >
        <Stack.Screen name="Index" component={Index} options={{ title: "My Blog Posts" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default StackNavigator;