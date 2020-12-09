import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Book = ({ book, handleRemoveBook }) => (
  <tr>
    <td>{ book.id }</td>
    <td>{ book.title }</td>
    <td>{ book.category }</td>
    <td>
      <button type="button" onClick={() => handleRemoveBook(book.id)}>
        remove book
      </button>
    </td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
  handleRemoveBook: PropTypes.func.isRequired,
};

Book.defaultProps = {
  book: {
    id: null,
    title: null,
    category: null,
  },
};

export default Book;
