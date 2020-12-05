import { ADD_BOOK, REMOVE_BOOK } from '../utils/actionTypes';

const book = (state, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      const { id, title, category } = action.payload;
      return {
        id,
        title,
        category,
        progress: 0,
        read: false,
      };
    }
    case REMOVE_BOOK:
      return state;
    default:
      return state;
  }
};

export default book;
