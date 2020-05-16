import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';



function CreateBlog({ navigation }) {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
  return(
    <View style={styles.container}>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput style={styles.textInput} value={title} onChangeText={(text) => setTitle(text)} />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput style={styles.textInput} value={content} onChangeText={(text) => setContent(text)} />
      <Button 
        title="Add Blog Post" 
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 50,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  textInput: {
    marginBottom: 40,
    borderWidth: 1,
    borderColor: '#666',
    paddingHorizontal: 10,
    paddingVertical: 6,
    fontSize: 16,
  },
});



export default CreateBlog;