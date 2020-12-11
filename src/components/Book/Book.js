import React from 'react';
import PropTypes from 'prop-types';
import '../../flex.css';
import './index.css';

const Book = ({ book, handleRemoveBook }) => (
  <article id={book.id} className="flex book jc-sb">
    <div>
      <div>
        <span>{book.category}</span>
        <h2>{book.title}</h2>
        <span>book author</span>
      </div>
      <div>
        <a href="#the-hunger-games">Comments</a>
        <a href="#the-hunger-games" onClick={() => handleRemoveBook(book.id)}>Remove</a>
        <a href="#the-hunger-games">Edit</a>
      </div>
    </div>
    <div className="flex jc-c ai-c">
      Book visual progress
    </div>
    <div className="flex flex-col">
      <span>Current book progress measure</span>
      <button type="button">Update progress</button>
    </div>
  </article>
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
