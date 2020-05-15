import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';



function BlogDetails({ route }) {
  const {id} = route.params;
  return(
    <View>
      <Text>Blog Details Screen</Text>
      <Text>{id}</Text>
    </View>
  );
}


const styles = StyleSheet.create({});



export default BlogDetails;