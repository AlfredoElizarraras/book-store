import deepFreeze from 'deep-freeze';
import books from './books';
import {
  addBook,
  removeBook,
} from '../actions';

describe('books reducer', () => {
  it('Should add new books information without mutating the state', () => {
    const stateBefore = [];
    const stateAfter = [
      {
        id: 1,
        title: 'Book title',
        category: 'Book category',
        progress: 0,
        read: false,
      },
    ];
    const action = addBook({
      id: 1,
      title: 'Book title',
      category: 'Book category',
    });

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      books(stateBefore, action),
    ).toEqual(stateAfter);
  });

  it('Should remove a book without mutating the state', () => {
    const stateBefore = [
      {
        id: 1,
        title: 'Book title',
        category: 'Book category',
        progress: 0,
        read: false,
      },
      {
        id: 2,
        title: 'Book title',
        category: 'Book category',
        progress: 0,
        read: false,
      },
    ];
    const stateAfter = [
      {
        id: 2,
        title: 'Book title',
        category: 'Book category',
        progress: 0,
        read: false,
      },
    ];
    const action = removeBook({ id: 1 });

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      books(stateBefore, action),
    ).toEqual(stateAfter);
  });
});
