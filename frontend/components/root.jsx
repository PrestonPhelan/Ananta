import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import AppContainer from './app_container';
import Splash from './splash/splash';
import Header from './header/header';

//TODO Remove test route


const Root = ({ store }) => {


  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser.username === "") {
      replace('/');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser.username !== "") {
      replace('/test');
    }
  };

  return (
   <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ AppContainer }>
          <IndexRoute component={ Splash } onEnter={_redirectIfLoggedIn}/>
          <Route path="/test" component={ Header } onEnter={_ensureLoggedIn} />
        </Route>

      </Router>
    </Provider>
  );
};

export default Root;
