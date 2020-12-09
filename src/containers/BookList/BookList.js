import React from 'react';
import PropTypes from 'prop-types';
import Book from '../../components/Book';
import CategoryFilter from '../../components/CategoryFilter';

const BookList = ({ books = [], removeBook, changeFilter }) => {
  const handleRemoveBook = id => {
    removeBook({ id });
  };

  const handleFilterChange = filter => {
    changeFilter(filter);
  };

  return (
    <>
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {books.map(
            book => (
              (
                <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
              )
            ),
          )}
        </tbody>
      </table>
    </>
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
  changeFilter: PropTypes.func.isRequired,
};

export default BookList;
