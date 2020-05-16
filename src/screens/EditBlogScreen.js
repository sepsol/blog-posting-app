import React from 'react';

import BlogForm from '../components/BlogPostForm';



function EditBlog() {
  return (
    <BlogForm 
      onSubmit={() => 
        console.warn('edit screen')
      }
    />
  );
}



export default EditBlog;