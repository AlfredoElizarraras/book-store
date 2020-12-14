import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';
import { saveState } from './utils/localStorage';

store.subscribe(() => {
  saveState({

    books: store.getState().books,
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
