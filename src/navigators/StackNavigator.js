import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import IndexScreen from '../screens/IndexScreen';
import BlogDetailsScreen from '../screens/BlogDetailsScreen';



const Stack = createStackNavigator();

function StackNavigator() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index" screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen name="Index" component={IndexScreen} options={{ title: "My Blog Posts" }}/>
        <Stack.Screen name="Details" component={BlogDetailsScreen} options={{ title: "Blog Post Details" }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default StackNavigator;