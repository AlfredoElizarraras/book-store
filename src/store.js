import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './reducers';
import initBooks from './utils/data';

/* eslint no-underscore-dangle: 0 */
export default createStore(
  rootReducer,
  initBooks,
  devToolsEnhancer(),
);
