import './App.css';
import React from 'react';
import BookList from '../../containers/BookList';
import BookForm from '../BookForm';

const App = () => (
  <div>
    <BookForm />
    <BookList />
  </div>
);

export default App;
