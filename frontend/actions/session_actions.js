import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const demoLogin = () => dispatch => dispatch(login({
        username: "Guest",
        password: "password"
    }));

export const login = user => dispatch => (
  SessionApiUtil.login(user)
    .then(
      res => dispatch(receiveCurrentUser(res)),
      err => dispatch(receiveErrors(err.responseJSON)))
  );

export const logout = () => dispatch => (
  SessionApiUtil.logout().
    then( res => dispatch(receiveCurrentUser(null)))
);

export const signup = user => dispatch => (
  SessionApiUtil.signup(user)
    .then(
      res => dispatch(receiveCurrentUser(res)),
      err => dispatch(receiveErrors(err.responseJSON)))
);
