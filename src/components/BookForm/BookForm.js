import React from 'react';
import { v4 as uuid } from 'uuid';
import BOOK_CATEGORIES from '../../utils/const';

const BookForm = () => (
  <form>
    <label htmlFor="title">
      Book Title:
      <input type="title" id="title" name="title" />
    </label>
    <label htmlFor="categories">
      Choose a car:
      <select id="categories" name="categories">
        {BOOK_CATEGORIES.map(category => (
          <option key={uuid()} value={category}>
            {category}
          </option>
        ))}
      </select>
    </label>
  </form>
);

export default BookForm;
