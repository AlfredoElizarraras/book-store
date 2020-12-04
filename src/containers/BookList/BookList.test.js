import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import BookList from './BookList';

describe('BookList', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BookList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('Has a valid snapshot', () => {
    const component = renderer.create(<BookList />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
