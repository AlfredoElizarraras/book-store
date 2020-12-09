import { getBooksByCategory } from './selectors';

describe('getBooksByFilter', () => {
  it('should return books from the store sorted by category', () => {
    const store = {
      books: [
        {
          id: '7f19c555-c69c-4768-b2aa-5302da91ac2d',
          title: 'Book Title',
          category: 'Action',
          progress: 0,
          read: false,
        },
        {
          id: '52d831c1-2394-4d7a-9300-dadaac161d28',
          title: 'Book Title 1',
          category: 'Horror',
          progress: 0,
          read: false,
        },
        {
          id: '80fde89b-97b8-42d5-aaf2-ebd2fb04ed3f',
          title: 'Book Title 2',
          category: 'Kids',
          progress: 0,
          read: false,
        },
      ],
      categoryFilter: 'Kids',
    };
    expect(getBooksByCategory(store, store.categoryFilter)).toHaveLength(1);
  });

  it('should return all books when the category is null', () => {
    const store = {
      books: [
        {
          id: '7f19c555-c69c-4768-b2aa-5302da91ac2d',
          title: 'Book Title',
          category: 'Action',
          progress: 0,
          read: false,
        },
        {
          id: '52d831c1-2394-4d7a-9300-dadaac161d28',
          title: 'Book Title 1',
          category: 'Horror',
          progress: 0,
          read: false,
        },
        {
          id: '80fde89b-97b8-42d5-aaf2-ebd2fb04ed3f',
          title: 'Book Title 2',
          category: 'Kids',
          progress: 0,
          read: false,
        },
      ],
      categoryFilter: null,
    };
    expect(getBooksByCategory(store, store.categoryFilter)).toHaveLength(3);
  });
});
