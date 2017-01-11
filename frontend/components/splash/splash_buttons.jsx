import React from 'react';

import { hashHistory } from 'react-router';

class SplashButtons extends React.Component {
  constructor(props) {
    super(props);
    // this.demoLogIn = this.demoLogIn.bind(this);
    // this.signUp = this.signUp.bind(this);
    // this.logIn = this.logIn.bind(this);
  }

  demoClick(e) {
    e.preventDefault();
    console.log("This will log in a guest!");
  }

  signUpClick(e) {
    e.preventDefault();
    hashHistory.push('/signup');
  }

  logInClick(e) {
    e.preventDefault();
    hashHistory.push('/login');
  }

  render() {
    return (
      <div>
        <h4>{"I'm the splash buttons!"}</h4>
        <button onClick={this.demoClick}>DEMO</button>
        <button onClick={this.signUpClick}>SIGN UP</button>
        <button onClick={this.logInClick}>LOG IN</button>
      </div>
    );
  }
}

export default SplashButtons;
