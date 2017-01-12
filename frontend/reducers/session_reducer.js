import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';

const _nullUser = {
  currentUser: {
    username: ""
  },
  errors: []
};

export default (state = _nullUser, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge({}, _nullUser, {currentUser: action.currentUser});
      return newState;
    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};
