import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './views/App';
import './styles/index.less';

import store from "./store";

import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
	<Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
