import createDataContext from './createDataContext';



function blogReducer(state, action) {
  switch (action.type) {
    case 'add_blogpost':
      return [ 
        {id: , title: `Blog Post #${state.length + 1}`},
        ...state 
      ];
    default:
      return state;
  }
}


const addBlogPost = dispatch => () => dispatch({ type: 'add_blogpost' });
// function addBlogPost(dispatch) {
//   return(
//     () => dispatch({ type: 'add_blogpost' })
//   );
// }



export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);