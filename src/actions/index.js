import {
  ADD_BOOK,
  REMOVE_BOOK,
  CHANGE_FILTER,
  USER_AUTH,
} from '../utils/actionTypes';

export const addBook = book => ({
  type: ADD_BOOK,
  payload: {
    ...book,
  },
});

export const removeBook = book => ({
  type: REMOVE_BOOK,
  payload: {
    ...book,
  },
});

export const changeFilter = filter => ({
  type: CHANGE_FILTER,
  payload: {
    filter,
  },
});

export const userAuth = user => ({
  type: USER_AUTH,
  payload: {
    user,
  },
});
