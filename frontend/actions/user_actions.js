import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ACTIVATE_USER = 'ACTIVATE_USER';

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const activateUser = user => ({
  type: ACTIVATE_USER,
  user
});

export const fetchUsers = () => dispatch => (
  UserApiUtil.fetchUsers()
    .then( users => dispatch(receiveUsers(users)))
);

export const fetchUser = id => dispatch => (
  UserApiUtil.fetchUser(id)
    .then( user => dispatch(activateUser(user)))
);

export const updateUser = user => dispatch => (
  UserApiUtil.updateUser(user)
    .then( newUser => dispatch(activateUser(newUser)))
);
