import { connect } from 'react-redux';
import BookForm from './BookForm';
import { addBook } from '../../actions/index';

export default connect(null, { addBook })(BookForm);
