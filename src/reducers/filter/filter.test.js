import deepFreeze from 'deep-freeze';
import { changeFilter } from '../../actions';
import categoryFilter from './filter';

describe('Filter reducer', () => {
  it('Should change the filter category without modifiying the state.', () => {
    const stateBefore = '';
    const stateAfter = null;
    const action = changeFilter('ALL');

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(categoryFilter(stateBefore, action)).toEqual(stateAfter);
  });
});
