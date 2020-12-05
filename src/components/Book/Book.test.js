import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Book from './Book';

describe('Book', () => {
  const props = {
    book: { id: 1, title: 'Book Title', category: 'Book Category' },
  };

  it('renders without crashing', () => {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    table.appendChild(tbody);
    ReactDOM.render(<Book book={props.book} />, tbody);
    ReactDOM.unmountComponentAtNode(tbody);
  });

  test('Has a valid snapshot', () => {
    const component = renderer.create(<Book book={props.book} />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
