import React from 'react';
import ReactDOM from 'react-dom';

//TODO Remove after testing
import * as SessionApiUtil from './util/session_api_util';
window.signup = SessionApiUtil.signup;
window.login = SessionApiUtil.login;
window.logout = SessionApiUtil.logout;
//End removal

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<div>It's working!!!</div>, root);
});
