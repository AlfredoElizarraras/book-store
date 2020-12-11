import React from 'react';
import PropTypes from 'prop-types';
import Book from '../../components/Book';
import './index.css';

const BookList = ({ books = [], removeBook }) => {
  const handleRemoveBook = id => {
    removeBook({ id });
  };

  return (
    <div className="bookList flex jc-c">
      <div style={{ borderBottom: '1px solid #e8e8e8', width: '80%' }}>
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
