import * as SessionApiUtil from '../util/session_api_util';
import { hashHistory } from 'react-router';

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
    })).then(() => hashHistory.push('/test'));

export const login = user => dispatch => (
  SessionApiUtil.login(user)
    .then(
      res => dispatch(receiveCurrentUser(res)),
      err => dispatch(receiveErrors(err.responseJSON)))
  );

export const logout = () => dispatch => (
  SessionApiUtil.logout()
    .then( () => {
      dispatch(receiveCurrentUser({}));
      hashHistory.push('/');
    })
);

export const signup = user => dispatch => (
  SessionApiUtil.signup(user)
    .then(
      res => dispatch(receiveCurrentUser(res)),
      err => dispatch(receiveErrors(err.responseJSON)))
);
