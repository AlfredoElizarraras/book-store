import {
  ADD_BOOK,
  REMOVE_BOOK,
  CHANGE_FILTER,
  USER_LOGIN,
  USER_LOGOUT,
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

export const userLogin = user => ({
  type: USER_LOGIN,
  payload: {
    user,
  },
});

export const userLogout = () => ({
  type: USER_LOGOUT,
});
