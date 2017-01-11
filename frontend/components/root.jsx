import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import Splash from './splash/splash';
import SessionFormContainer from './session_form/session_form_container';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Splash } />
        <Route path="/:type" component={ SessionFormContainer } />
      </Route>

    </Router>
  </Provider>
);

export default Root;
