import {
  ADD_BOOK,
  REMOVE_BOOK,
} from '../../utils/actionTypes';
import book from './book';
import initBooks from '../../utils/data';

const books = (state = initBooks, action) => {
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
