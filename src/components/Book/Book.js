import React from 'react';
import PropTypes from 'prop-types';
import CircleProgressChart from '../CircleProgressChart';
import '../../flex.css';
import './index.css';

const Book = ({ book, handleRemoveBook }) => (
  <article id={book.id} className="flex book jc-sb">
    <div>
      <div>
        <span className="book__main-info__category">
          {book.category}
        </span>
        <h2 className="book__main-info__title">
          {book.title}
        </h2>
        <span className="book__main-info__author">
          book author
        </span>
      </div>
      <div className="book__action-links">
        <a href="#the-hunger-games" className="book__action-link">
          Comments
        </a>
        <a
          href="#the-hunger-games"
          className="book__action-link"
          onClick={() => handleRemoveBook(book.id)}
        >
          Remove
        </a>
        <a href="#the-hunger-games" className="book__action-link book__action-link--last">
          Edit
        </a>
      </div>
    </div>
    <div className="flex jc-sb">
      <div className="flex jc-c ai-c">
        <CircleProgressChart percent={book.progress} />
      </div>
      <div className="flex flex-col">
        <span>Current book progress measure</span>
        <span>progress value</span>
        <button type="button">Update progress</button>
      </div>
    </div>
  </article>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    progress: PropTypes.number,
  }),
  handleRemoveBook: PropTypes.func.isRequired,
};

Book.defaultProps = {
  book: {
    progress: 30,
  },
};

export default Book;
