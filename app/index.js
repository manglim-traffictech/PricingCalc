import { AppRegistry } from 'react-native';
import App from './App.js';

async function bootstrap() {
  let appName = 'pricingcalculatorapp';
  try {
    const response = await fetch('./app.json');
    const { name } = await response.json();
    if (name) {
      appName = name;
    }
  } catch (error) {
    console.error('Failed to load app configuration', error);
  }

  AppRegistry.registerComponent(appName, () => App);

  if (typeof document !== 'undefined') {
    AppRegistry.runApplication(appName, {
      rootTag: document.getElementById('root'),
    });
  }
}

bootstrap();
