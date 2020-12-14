import { ADD_BOOK } from '../../utils/actionTypes';
import bookModel from './bookModel';

const book = (state, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return bookModel(action.payload);
    default:
      return state;
  }
};

export default book;
