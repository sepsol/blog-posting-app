import React, { useReducer } from 'react';



export default function (reducer, actions, initialState) {
  const Context = React.createContext();
  

  function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    
      // actions === { addBlogPost:  (dispatch) => { return () => dispatch({type:...}) } ,  key: 'value', ... }

      // we want to loop through each item in the object to invoke the outer function and return the inner function
      // and use our 'dispatch' from 'useReducer' hook available in the current component to invoke the inner function
    const boundActions = {};
      // we process all 'actions' in original object and assign (or 'bound') our 'dispatch' to them
      // we then will put them all in 'boundActions' object with the help of this 'for-in' loop:
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

      
    return(

      <Context.Provider value={{ state, ...boundActions }}>
        { children }
      </Context.Provider>

    );
  }



  return { Context, Provider };
}