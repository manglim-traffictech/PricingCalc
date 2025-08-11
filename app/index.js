import React from 'https://esm.sh/react@18';
import { createRoot } from 'https://esm.sh/react-dom@18/client';
import App from './App.js';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(React.createElement(App));
