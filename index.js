/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App'; // Ajusta esta línea según la estructura de tu proyecto
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
