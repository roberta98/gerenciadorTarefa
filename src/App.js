import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './screens/Login';
import Home from './screens/Home'
import SideBar from './components/SideBar';

const Drawer = createDrawerNavigator();

const App = props => {

  const [isLogged, setisLogged] = useState(props.user.logginOn)
  useEffect(() => {
    if(isLogged){
      setisLogged(!isLogged)
    }
  }, [isLogged])

function renderHome() {
  return (
    <Drawer.Navigator drawerContent={() => <SideBar />}>
      <Drawer.Screen name={'Menu'} component={Home} />
    </Drawer.Navigator>
  );
}

function renderLogin(){
  return <Login />
}

  const authenticated = props.user.logginOn;
  return (
    <NavigationContainer>
      {isLogged && renderHome()}
      {!isLogged && renderLogin()}
    </NavigationContainer>
  );
}

function mapStateToProps(state) {
	return {
		logged: state.user,
	};
}

export default connect(mapStateToProps)(App);