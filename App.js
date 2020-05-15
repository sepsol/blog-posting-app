import React from 'react';

import StackNavigator from './src/navigators/StackNavigator';
import { Provider as BlogProvider } from './src/context/BlogContext';



export default () => (

  <BlogProvider>
    <StackNavigator/>
  </BlogProvider>

)