import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Context as BlogContext } from '../context/BlogContext';



function BlogDetails({ route }) { // for passing data between screens

  const { id } = route.params; // for passing data between screens
  const { state } = useContext(BlogContext);
  const blogPost = state.find((blogPost) => blogPost.id === id);
  
  return(
    <View>
      <Text>{blogPost.title}</Text>
      <Text>ID: {id}</Text>
    </View>
  );
}


const styles = StyleSheet.create({});



export default BlogDetails;