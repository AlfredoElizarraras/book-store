import { USER_AUTH } from '../../utils/actionTypes';

const user = (state = null, action) => {
  switch (action.type) {
    case USER_AUTH:
      return action.payload.user;
    default:
      return state;
  }
};

export default user;
