import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

import { Feather } from '@expo/vector-icons'; 



function IndexScreen({ navigation }) {

  const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);
  
  return(
    <View>
      <Button title="Add Blog Post" onPress={addBlogPost}/>
      <FlatList 
        data={state}
        keyExtractor={( blogPost ) => blogPost.id.toString()}
        renderItem={({ item }) => { return(
          <TouchableOpacity onPress={() => navigation.push('Details', { id: item.id }) /* for passing data between screens */}> 
            <View style={styles.blogsView}>
              <Text style={styles.blogTitle}>{item.title} (id: {item.id})</Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather name="trash" size={24} color='#444'/>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
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
  blogTitle: {
    fontSize: 16,
    color: '#333',
  },
});



export default IndexScreen;