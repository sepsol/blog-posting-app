import createDataContext from './createDataContext';
import getRandomUniqueNum, { createRangeArray } from '../functions/getRandomUniqueNum';
import jsonServer from '../api/jsonServer';



let idRangeArray = createRangeArray(10000);


function blogReducer(state, action) {
  switch (action.type) {
    case 'get_blogpost':
      return action.payload;
    // case 'add_blogpost':
    //   return [
    //     {
    //       id: getRandomUniqueNum(idRangeArray), 
    //       title: action.payload.title,
    //       content: action.payload.content,
    //     },
    //     ...state 
    //   ];
    case 'edit_blogpost':
      return state.map(item => item.id === action.payload.id ? action.payload : item);
    case 'delete_blogpost':
      return state.filter(blogPost => blogPost.id !== action.payload);
    default:
      return state;
  }
}


// function addBlogPost(dispatch) {
//   return(
//     () => dispatch({ type: 'add_blogpost' })
//   );
// }
const getBlogPost = dispatch => (
  async () => {
    try {
      const response = await jsonServer.get('/blogposts');
      dispatch({ type:'get_blogpost', payload: response.data });
    } catch (err) {
      console.log(`Error retreiving blogposts.\n${err}`)
    }
  }
);
const addBlogPost = dispatch => (
  async (title, content, callback) => { 
    await jsonServer.post('/blogposts', {title, content});
    // dispatch({ type: 'add_blogpost', payload: { title, content } });
    if (callback) {
      callback();
    }
  }
);
const editBlogPost = dispatch => (
  async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });
    dispatch({ type: 'edit_blogpost', payload: { id, title, content } });
    if (callback) {
      callback();
    }
  }
);
const deleteBlogPost = dispatch => (
  async (id) => {
    dispatch({ type: 'delete_blogpost', payload: id })
    await jsonServer.delete(`/blogposts/${id}`);
    alert('Blogpost successfully deleted!');
  }
);



export const { Context, Provider } = createDataContext(
  blogReducer,
  { getBlogPost, addBlogPost, editBlogPost, deleteBlogPost },
  []
);