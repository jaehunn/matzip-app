/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

/** @see {@react-navigation/stack} https://reactnavigation.org/docs/stack-navigator#installation */
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);
