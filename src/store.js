import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import throttle from 'lodash/throttle';
import rootReducer from './reducers';
import initBooks from './utils/data';
import { loadState, saveState } from './utils/localStorage';

const configureStore = () => {
  const localState = loadState();
  const books = localState && localState.books ? localState.books : initBooks.books;
  const user = localState && localState.user ? localState.user : null;

  const store = createStore(
    rootReducer,
    { books, user },
    devToolsEnhancer(),
  );

  store.subscribe(throttle(() => {
    saveState({
      books: store.getState().books,
      user: store.getState().user,
    });
  }, 1000));

  return store;
};

export default configureStore;
