import React from 'react';
import ReactDOM from 'react-dom';
import CategoryFilter from './CategoryFilter';
import { changeFilter } from '../../actions';

describe('Book', () => {
  const props = {
    filter: 'Horror',
    handleFilterChange: filter => changeFilter(filter),
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CategoryFilter handleFilterChange={props.handleFilterChange} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
