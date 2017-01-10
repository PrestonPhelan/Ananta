import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';

//TODO Remove after testing
  window.store = configureStore();
//END

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<div>It's working!!!</div>, root);
});
