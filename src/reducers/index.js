import { combineReducers } from 'redux';
import books from './books';
import user from './userAuth';

export default combineReducers({ books, user });
