import React from 'react';
import PropTypes from 'prop-types';
import CircleProgressChart from '../CircleProgressChart';
import Button from '../Button';
import '../../flex.css';
import './index.css';

const Book = ({ book, handleRemoveBook }) => (
  <article id={book.id} className="flex book jc-sb">
    <div>
      <div>
        <span className="book__main-info__category">{book.category}</span>
        <h2 className="book__main-info__title">{book.title}</h2>
        <span className="book__main-info__author">{book.author}</span>
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
        <a
          href="#the-hunger-games"
          className="book__action-link book__action-link--last"
        >
          Edit
        </a>
      </div>
    </div>
    <div className="flex jc-sb">
      <div className="flex jc-c ai-c book__chart-wrapper">
        <CircleProgressChart
          percent={book.progress}
          radius="35"
          strokeWidth="5"
          maxValue={book.maxProgressValue}
          currentValue={book.currentProgressValue}
        />
        <span className="book__chart-wrapper--border-right" />
      </div>
      <div className="flex flex-col">
        <span className="book__progress-measure">
          Current
          {' '}
          {book.progressMeasure}
        </span>
        <span className="book__current-progress-value">
          {book.progressMeasureValue}
        </span>
        <Button margin="0.6rem 0px 0px">Update progress</Button>
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
    author: PropTypes.string,
    progressMeasure: PropTypes.string,
    progressMeasureValue: PropTypes.string,
    maxProgressValue: PropTypes.number,
    currentProgressValue: PropTypes.number,
  }),
  handleRemoveBook: PropTypes.func.isRequired,
};

Book.defaultProps = {
  book: {
    progress: 30,
    author: 'Book author',
    progressMeasure: 'chapter',
    progressMeasureValue: 'Introduction',
    maxProgressValue: 0,
    currentProgressValue: 0,
  },
};

export default Book;
