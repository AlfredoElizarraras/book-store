import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import BOOK_CATEGORIES from '../../utils/const';

const CategoryFilter = handleFilterChange => (
  <>
    <label htmlFor="categories">
      Fiter by category
      <select id="categories" type="categories" name="categories" onChange={e => handleFilterChange(e.target.value)}>
        <option>ALL</option>
        {BOOK_CATEGORIES.map(category => (
          <option key={uuid()} value={category}>
            {category.toUpperCase()}
          </option>
        ))}
      </select>
    </label>
  </>
);

CategoryFilter.propType = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
