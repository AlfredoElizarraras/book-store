import { connect } from 'react-redux';
import BookList from './BookList';
import { removeBook } from '../../actions';
import { getBooks } from '../../utils/selectors/selectors';

export default connect(state => ({ books: getBooks(state) }), { removeBook })(BookList);
