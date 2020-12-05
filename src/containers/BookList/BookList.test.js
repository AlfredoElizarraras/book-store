import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import BookList from './BookList';

describe('BookList', () => {
  const props = {
    books: [
      { id: 1, title: 'Book Title', category: 'Book Category' },
      { id: 2, title: 'Book Title One', category: 'Book Category One' },
    ],
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BookList books={props.books} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('Has a valid snapshot', () => {
    const component = renderer.create(<BookList books={props.books} />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
