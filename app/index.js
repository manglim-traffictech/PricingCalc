import { AppRegistry } from 'react-native';
import App from './App.js';
import appConfig from './app.json' assert { type: 'json' };

const appName = appConfig.name;

AppRegistry.registerComponent(appName, () => App);

if (typeof document !== 'undefined') {
  AppRegistry.runApplication(appName, {
    rootTag: document.getElementById('root'),
  });
}
