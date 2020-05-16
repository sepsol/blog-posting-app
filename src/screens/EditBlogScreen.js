import React, { useContext } from 'react';

import { Context as BlogContext } from '../context/BlogContext';
import BlogForm from '../components/BlogPostForm';



function EditBlog({ navigation, route }) {

  const id = route.params;
  const { state, editBlogPost } = useContext(BlogContext);
  const blogPost = state.find(item => item.id === id);
  
  return (
    <BlogForm 
      initialTitle={blogPost.title}
      initialContent={blogPost.content}
      onSubmit={(title, content) =>
        editBlogPost(id, title, content, () => navigation.goBack())
      }
    />
  );
}



export default EditBlog;