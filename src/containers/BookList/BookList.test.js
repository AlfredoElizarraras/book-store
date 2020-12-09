import React from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuid } from 'uuid';
import BookList from './BookList';
import { removeBook, changeFilter } from '../../actions';

describe('BookList', () => {
  const props = {
    books: [
      { id: uuid(), title: 'Book Title', category: 'Book Category' },
      { id: uuid(), title: 'Book Title One', category: 'Book Category One' },
    ],
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BookList
      books={props.books}
      removeBook={removeBook}
      changeFilter={changeFilter}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
