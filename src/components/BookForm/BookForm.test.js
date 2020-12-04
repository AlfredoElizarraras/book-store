import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import BookForm from './BookForm';

describe('BookForm', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BookForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('Has a valid snapshot', () => {
    const component = renderer.create(<BookForm />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
