import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import globalStyles from '../components/globalStyles';
import { Feather } from '@expo/vector-icons'; 
import { Context as BlogContext } from '../context/BlogContext';



function BlogDetails({ navigation, route }) { // for passing data between screens

  const { id } = route.params; // for passing data between screens
  const { state } = useContext(BlogContext);
  const blogPost = state.find((blogPost) => blogPost.id === id);

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity style={globalStyles.header} onPress={() => navigation.push('Edit', id)}>
        <Feather name="edit-2" size={24} />
      </TouchableOpacity>
    ),
  });
  
  return(
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
      <Text>ID: {id}</Text>
    </View>
  );
}


const styles = StyleSheet.create({});



export default BlogDetails;