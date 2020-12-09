import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import BOOK_CATEGORIES from '../../utils/const';

class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 'ALL',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = categoryFilter => {
    const { handleFilterChange } = this.props;
    handleFilterChange(categoryFilter);
    this.setState({ selected: categoryFilter });
  }

  render() {
    const { selected } = this.state;
    return (
      <>
        <label htmlFor="categories">
          Fiter by category
          <select
            id="categories"
            type="categories"
            name="categories"
            onChange={e => this.handleChange(e.target.value)}
            value={selected}
          >
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
  }
}

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
