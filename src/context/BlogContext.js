import createDataContext from './createDataContext';
import getRandomUniqueNum, { createRangeArray } from '../functions/getRandomUniqueNum';



let idRangeArray = createRangeArray(10000);


function blogReducer(state, action) {
  switch (action.type) {
    case 'add_blogpost':
      return [
        {
          id: getRandomUniqueNum(idRangeArray), 
          title: action.payload.title,
          content: action.payload.content,
        },
        ...state 
      ];
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
const addBlogPost = dispatch => (title, content, callback) => {
  dispatch({ type: 'add_blogpost', payload: { title, content } });
  callback();
}
const editBlogPost = dispatch => (id, title, content, callback) => {
  dispatch({ type: 'edit_blogpost', payload: { id, title, content } });
  callback();
}
const deleteBlogPost = dispatch => (id) => dispatch({ type: 'delete_blogpost', payload: id });



export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, editBlogPost, deleteBlogPost },
  [{id: 0, title: "Test Blog Post", content: "it's a sample content."}]
);