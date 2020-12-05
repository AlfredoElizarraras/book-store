import React from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import BOOK_CATEGORIES from '../../utils/const';

class BookForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: BOOK_CATEGORIES[0],
    };
  }

  handleSubmit = () => {
    const { title, category } = this.state;
    const { addBook } = this.props;
    const book = {
      id: uuid(),
      title,
      category,
    };
    addBook(book);

    this.setState({ title: '', category: BOOK_CATEGORIES[0] });
  }

  updateTitle(title) {
    this.setState({ title });
  }

  updateCategory(category) {
    this.setState({ category });
  }

  render() {
    const { title, category } = this.state;
    return (
      <form>
        <label htmlFor="title">
          Book Title:
          <input
            type="title"
            id="title"
            name="title"
            onChange={e => this.updateTitle(e.target.value)}
            value={title}
          />
        </label>
        <label htmlFor="categories">
          Choose a car:
          <select
            id="categories"
            name="categories"
            onChange={e => this.updateCategory(e.target.value)}
            value={category}
          >
            {BOOK_CATEGORIES.map(category => (
              <option key={uuid()} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button type="button" onClick={this.handleSubmit}>
            Add Book
          </button>
        </label>
      </form>
    );
  }
}

BookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default BookForm;
