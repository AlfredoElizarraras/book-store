import React from 'react';
import PropTypes from 'prop-types';
import Book from '../../components/Book';
import './index.css';

const BookList = ({ books = [], removeBook }) => {
  const handleRemoveBook = id => {
    removeBook({ id });
  };

  return (
    <div className="book-list flex jc-c">
      <div className="books__wrapper">
        {books.map(book => (
          <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
        ))}
      </div>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default BookList;
