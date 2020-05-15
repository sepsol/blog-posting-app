import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native';

import { Context as BlogContext } from '../context/BlogContext';

import { Feather } from '@expo/vector-icons'; 



function IndexScreen() {

  const { state, addBlogPost } = useContext(BlogContext);
  
  return(
    <View>
      <Button title="Add Blog Post" onPress={addBlogPost}/>
      <FlatList 
        data={state}
        keyExtractor={( blogPost ) => blogPost.id}
        renderItem={({ item }) => { return(
          <View style={styles.blogsView}>
            <Text>{item.title} (id: {item.id})</Text>
            <TouchableOpacity>
              <Feather name="trash-2" size={24}/>
            </TouchableOpacity>
          </View>
        )}}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  blogsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingHorizontal: 25,
    borderTopWidth: 1,
    borderTopColor: '#aaa'
  },
});



export default IndexScreen;