import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import AppContainer from './app_container';
import Splash from './splash/splash';
import Layout from './layout/layout';
import TeamSelect from './team_select/team_select';
import TeamView from './team_view/team_view';

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
      replace('/app/teams');
    }
  };

  return (
   <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ AppContainer }>
          <IndexRoute component={ Splash } onEnter={_redirectIfLoggedIn} />
          <Route path="/app" component={ Layout } onEnter={_ensureLoggedIn}>
            <IndexRoute component={ TeamSelect } />
            <Route path="teams" component={ TeamSelect }>
              <Route
                path=":teamId/projects"
                component={ TeamView } />              
            </Route>
          </Route>

        </Route>

      </Router>
    </Provider>
  );
};

export default Root;
