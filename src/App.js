import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home'
import Login from './screens/Login'

const App = () => {
  return (
    <Provider store={store}>
      {/* <NavigationContainer> */}
        <Login />
      {/* </NavigationContainer> */}
      
    </Provider>

  );
};

export default App;
