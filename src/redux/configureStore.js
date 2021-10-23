import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import homeReducer from './home/home';
import urlLocationReducer from './urlLocation/urlLocation';

const reducer = combineReducers({
  homeReducer,
  urlLocationReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
