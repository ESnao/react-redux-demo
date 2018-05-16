import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import iot from './reducers';

const store = createStore(iot, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;
