import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './screens/Login';
import Home from './screens/Home'

const Drawer = createDrawerNavigator();

const App = props => {

  const [isLogged, setisLogged] = useState(false) //props.user.logginOn ? false : 
  console.log(props.user)
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

  return (
    <NavigationContainer>
      {isLogged && renderHome()}
      {!isLogged && renderLogin()}
    </NavigationContainer>
  );
}

function mapStateToProps(state) {
	return {
		user: state.userReducer,
	};
}

export default connect(mapStateToProps)(App);