/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { Componente2 } from './src/Componente2';
import { name as appName } from './app.json';
import { Login } from './src/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Listas } from './src/Listas';

const Stack = createNativeStackNavigator();

const Rotas = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="App" component={App} />
            <Stack.Screen name="Lista" component={Listas} />
        </Stack.Navigator>
    </NavigationContainer>
);


AppRegistry.registerComponent(appName, () => Rotas);
