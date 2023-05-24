import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './Redux/redux-store';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);
