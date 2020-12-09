import { CHANGE_FILTER } from '../../utils/actionTypes';

const categoryFilter = (state = '', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload.filter === 'ALL' ? null : action.payload.filter;
    default:
      return state;
  }
};

export default categoryFilter;
