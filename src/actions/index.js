import {
  ADD_BOOK,
  REMOVE_BOOK,
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
