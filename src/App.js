import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Text, View } from 'react-native';

import Home from './screens/Home'

import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <Home />

  );
};
  //   // <Provider store={store}>
  //     {/* <NavigationContainer> */}
  
  //     {/* </NavigationContainer> */}
  //  {/* </Provider>  */}

export default App;
