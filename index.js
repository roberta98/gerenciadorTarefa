import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import App from './src/App';
import { name as appName } from './app.json';
import store from './src/redux/store';

const AppContainer = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

AppRegistry.registerComponent(appName, () => AppContainer);