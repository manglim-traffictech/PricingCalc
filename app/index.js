import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
console.log('Bootstrapping React application. Root element:', rootElement);
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error('Root element not found. Application will not render.');
}
