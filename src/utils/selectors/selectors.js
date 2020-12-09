export const getBooks = store => store.books;

export const getBooksByCategory = (store, category) => {
  const allBooks = getBooks(store);
  if (!category) {
    return allBooks;
  }
  return allBooks.filter(book => book.category === category);
};
