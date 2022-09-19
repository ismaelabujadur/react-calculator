import React from 'react';
import { createRoot } from 'react-dom/client';
import { compose } from 'redux';
import { Provider } from 'react-redux';
import store from './store/index';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);

// Set up TypeScript so that we can debug the code with Redux DevTools.
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
