import React from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuid } from 'uuid';
import Book from './Book';
import { removeBook } from '../../actions';

describe('Book', () => {
  const props = {
    book: { id: uuid(), title: 'Book Title', category: 'Book Category' },
    handleRemoveBook: id => removeBook({ id }),
  };

  it('renders without crashing', () => {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    table.appendChild(tbody);
    ReactDOM.render(<Book book={props.book} handleRemoveBook={props.handleRemoveBook} />, tbody);
    ReactDOM.unmountComponentAtNode(tbody);
  });
});
