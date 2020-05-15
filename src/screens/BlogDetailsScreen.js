import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';



function BlogDetails({ route }) { // for passing data between screens
  const { id } = route.params; // for passing data between screens
  return(
    <View>
      <Text>Blog Details Screen</Text>
      <Text>{id}</Text>
    </View>
  );
}


const styles = StyleSheet.create({});



export default BlogDetails;