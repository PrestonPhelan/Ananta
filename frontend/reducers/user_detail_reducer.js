import { ACTIVATE_USER } from '../actions/user_actions';

const UserDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case ACTIVATE_USER:
      return action.user;
    default:
      return state;
  }
};

export default UserDetailReducer;
