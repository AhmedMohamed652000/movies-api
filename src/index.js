import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import './index.css';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './Redux_Files/store/store';

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);


