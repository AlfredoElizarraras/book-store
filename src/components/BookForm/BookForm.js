import React from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import Button from '../Button';
import BOOK_CATEGORIES from '../../utils/const';
import '../../flex.css';
import './index.css';

class BookForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: 'Category',
      categoryColor: '#c4c4c4',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title, category } = this.state;
    const { addBook } = this.props;
    if (category !== 'Category') {
      const book = {
        id: uuid(),
        title,
        category,
      };
      addBook(book);

      this.setState({ title: '', category: 'Category', categoryColor: '#c4c4c4' });
    }
  };

  handleChange({ name, value }, elementId = '') {
    if (name === 'category' && value !== 'Category') {
      document.getElementById(elementId).style.color = '#000000';
      this.setState({ categoryColor: '#000000' });
    } else if (name === 'category' && value === 'Category') {
      this.setState({ categoryColor: '#c4c4c4' });
    }
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, category, categoryColor } = this.state;
    return (
      <form className="book-form flex flex-col">
        <span className="book-form__title">Add new book</span>
        <div className="book-form__elements-wrapper">
          <input
            type="title"
            id="title"
            name="title"
            onChange={e => this.handleChange({ name: 'title', value: e.target.value })}
            value={title}
            placeholder="Book title"
          />
          <div className="book-form__select-wrapper">
            <span className="book-form__select-arrow">▼</span>
            <select
              id="categories"
              name="categories"
              onChange={e => this.handleChange({ name: 'category', value: e.target.value }, 'categories')}
              value={category}
              required
              className="book-form__select"
              placeholder="Category"
              style={{ color: categoryColor }}
            >
              <option>Category</option>
              {BOOK_CATEGORIES.map(category => (
                <option key={uuid()} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <Button fontWeight="bold" handleOnClick={this.handleSubmit} margin="0" height="2.875rem">
            Add Book
          </Button>
        </div>
      </form>
    );
  }
}

BookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default BookForm;
