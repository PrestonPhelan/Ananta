import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

//TODO Remove after testing
import { fetchUsers } from './actions/user_actions';
//END

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
  window.fetchUsers = fetchUsers;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
