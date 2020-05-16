import React, { useContext } from 'react';

import { Context as BlogContext } from '../context/BlogContext';
import BlogForm from '../components/BlogPostForm';



function CreateBlog({ navigation }) {
  const { addBlogPost } = useContext(BlogContext);
  
  return (
    <BlogForm 
      onSubmit={(title, content) => 
        addBlogPost(title, content, () => navigation.goBack())
      }
    />
  );
}



export default CreateBlog;