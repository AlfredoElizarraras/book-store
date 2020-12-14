import {
  ADD_BOOK,
  REMOVE_BOOK,
} from '../../utils/actionTypes';
import book from './book';

const books = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, book(undefined, action)];
    case REMOVE_BOOK: {
      const { id } = action.payload;
      return state.filter(b => b.id !== id);
    }
    default: {
      return state;
    }
  }
};

export default books;
