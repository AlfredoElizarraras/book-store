import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import throttle from 'lodash/throttle';
import rootReducer from './reducers';
import initBooks from './utils/data';
import { loadState, saveState } from './utils/localStorage';

const configureStore = () => {
  const localState = loadState();
  const books = localState && localState.books ? localState.books : initBooks.books;

  const store = createStore(
    rootReducer,
    { books },
    devToolsEnhancer(),
  );

  store.subscribe(throttle(() => {
    saveState({
      books: store.getState().books,
    });
  }, 1000));

  return store;
};

export default configureStore;
