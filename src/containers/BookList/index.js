import { connect } from 'react-redux';
import BookList from './BookList';
import { removeBook } from '../../actions';

const mapStateToProps = state => ({ books: state.books });

export default connect(mapStateToProps, { removeBook })(BookList);
