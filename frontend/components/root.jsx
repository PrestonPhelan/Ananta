import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import Splash from './splash/splash';
import Header from './header/header';

const redirectLoggedIn = () => {
  if (window.currentUser) {
    //Redirect code
    console.log("Will redirect");
  } else {
    //Do nothing
    console.log("Won't redirect");
  }
};

//TODO Remove test route


const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Splash } onEnter={redirectLoggedIn}/>
        <Route path="/test" component={ Header } />
      </Route>

    </Router>
  </Provider>
);

export default Root;
