import { connect } from 'react-redux';
import BookList from './BookList';
import { removeBook, changeFilter } from '../../actions';
import { getBooksByCategory } from '../../utils/selectors/selectors';

const mapStateToProps = state => {
  const { filter } = state;
  const books = getBooksByCategory(state, filter);

  return { books };
};

export default connect(mapStateToProps, { removeBook, changeFilter })(BookList);
