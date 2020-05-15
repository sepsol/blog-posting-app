import createDataContext from './createDataContext';
import getRandomUniqueNum, { createRangeArray } from '../functions/getRandomUniqueNum';



let idRangeArray = createRangeArray(10000);


function blogReducer(state, action) {
  switch (action.type) {
    case 'add_blogpost':
      return [ {id: getRandomUniqueNum(idRangeArray), title: `Blog Post #${state.length + 1}`}, ...state ];
    case 'delete_blogpost':
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
}


// function addBlogPost(dispatch) {
//   return(
//     () => dispatch({ type: 'add_blogpost' })
//   );
// }
const addBlogPost = dispatch => () => dispatch({ type: 'add_blogpost' });
const deleteBlogPost = dispatch => (id) => dispatch({ type: 'delete_blogpost', payload: id });



export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);