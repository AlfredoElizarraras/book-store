import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import Book from '../../components/Book';

const BookList = ({ books = [] }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {books.map(book => (
        <Book key={book.id} book={book} />
      ))}
    </tbody>
  </table>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ),
};

BookList.defaultProps = {
  books: [
    {
      id: 0,
      title: 'Default',
      category: 'Default',
    },
  ],
};

const mapStateToProps = state => ({ books: state.books });

export default connect(mapStateToProps)(BookList);
