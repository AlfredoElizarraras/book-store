import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './reducers';
import initBooks from './utils/data';
import { loadState } from './utils/localStorage';

const localState = loadState();
const books = localState && localState.books ? localState.books : initBooks.books;

/* eslint no-underscore-dangle: 0 */
export default createStore(
  rootReducer,
  { books },
  devToolsEnhancer(),
);
