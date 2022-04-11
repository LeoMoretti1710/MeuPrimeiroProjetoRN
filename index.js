/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {Componente2} from './src/Componente2';
import {name as appName} from './app.json';
import { Login } from './src/Login';


AppRegistry.registerComponent(appName, () => Login);
