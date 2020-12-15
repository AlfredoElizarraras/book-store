import React from 'react';
import ReactDOM from 'react-dom';
import throttle from 'lodash/throttle';
import './reset.css';
import './index.css';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';
import { saveState } from './utils/localStorage';

store.subscribe(throttle(() => {
  saveState({
    books: store.getState().books,
  });
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
