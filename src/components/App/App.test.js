import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import App from './App';
import store from '../../store';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><App /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('Has a valid snapshot', () => {
    const component = renderer.create(<Provider store={store}><App /></Provider>);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
