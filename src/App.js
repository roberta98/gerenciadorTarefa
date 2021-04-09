import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <View>
      <Text>HELLO WORLD</Text>
    </View>

  );
};
  //   // <Provider store={store}>
  //     {/* <NavigationContainer> */}
  
  //     {/* </NavigationContainer> */}
  //  {/* </Provider>  */}

export default App;
