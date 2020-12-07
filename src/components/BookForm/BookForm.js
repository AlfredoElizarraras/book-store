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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title, category } = this.state;
    const { addBook } = this.props;
    const book = {
      id: uuid(),
      title,
      category,
    };
    addBook(book);

    this.setState({ title: '', category: BOOK_CATEGORIES[0] });
  };

  handleChange({ name, value }) {
    this.setState({
      [name]: value,
    });
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
            onChange={e => this.handleChange({ name: 'title', value: e.target.value })}
            value={title}
          />
        </label>
        <label htmlFor="categories">
          Choose a car:
          <select
            id="categories"
            name="categories"
            onChange={e => this.handleChange({ name: 'category', value: e.target.value })}
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
