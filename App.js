import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppNavigation from './src/AppNavigation';

const App = () => {
	/* Функции */
	/* JSX код / разметка */
	return (
		<NavigationContainer>
			<AppNavigation />
		</NavigationContainer>
	);
};

export default App;
