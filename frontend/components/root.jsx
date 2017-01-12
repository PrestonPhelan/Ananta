import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import Splash from './splash/splash';
import Header from './header/header';

//TODO Remove test route

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Splash } />
        <Route path="/test" component={ Header } />
      </Route>

    </Router>
  </Provider>
);

export default Root;
