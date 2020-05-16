import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

import { Feather } from '@expo/vector-icons'; 



function BlogDetails({ navigation, route }) { // for passing data between screens

  const { id } = route.params; // for passing data between screens
  const { state } = useContext(BlogContext);
  const blogPost = state.find((blogPost) => blogPost.id === id);

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity style={{ marginRight: 15 }} onPress={() => console.log('cant touch this B)')}>
        <Feather name="edit-2" size={26} />
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