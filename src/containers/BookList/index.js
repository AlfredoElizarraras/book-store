import { connect } from 'react-redux';
import BookList from './BookList';

const mapStateToProps = state => ({ books: state.books.length > 0 ? state.books : undefined });

export default connect(mapStateToProps)(BookList);
