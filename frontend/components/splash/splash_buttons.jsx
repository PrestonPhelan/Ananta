import React from 'react';
import { hashHistory } from 'react-router';
import Modal from 'boron/ScaleModal';

import SessionFormContainer from '../session_form/session_form_container';

class SplashButtons extends React.Component {
  constructor(props) {
    super(props);
    this.signUpClick = this.signUpClick.bind(this);
    this.logInClick = this.logInClick.bind(this);
    this.hideSignUp = this.hideSignUp.bind(this);
    this.hideLogIn = this.hideLogIn.bind(this);
  }

  demoClick(e) {
    e.preventDefault();
    console.log("This will log in a guest!");
  }

  signUpClick() {
    this.refs.signUpModal.show();
  }

  logInClick() {
    this.refs.logInModal.show();
  }

  hideSignUp() {
    this.refs.signUpModal.hide();
  }

  hideLogIn() {
    this.refs.logInModal.hide();
  }

  switchModals(type) {
    if (type === 'signup') {
      return () => {
        this.hideSignUp();
        this.logInClick();
      };
    } else {
      return () => {
        this.hideLogIn();
        this.signUpClick();
      };
    }
  }


  render() {
    return (
      <div>
        <h4>{"I'm the splash buttons!"}</h4>
        <button onClick={this.demoClick}>DEMO</button>
        <button onClick={this.signUpClick}>SIGN UP</button>
        <button onClick={this.logInClick}>LOG IN</button>

        <Modal ref="signUpModal">
          <button onClick={this.hideSignUp}>X</button>
          <SessionFormContainer formType="signup" />
          <h5>{"Have an account?"}</h5>
          <button onClick={this.switchModals('signup')}>Log In</button>
        </Modal>

        <Modal ref="logInModal">
          <button onClick={this.hideLogIn}>X</button>
          <SessionFormContainer formType="login" />
          <h5>{"New to Ananta?"}</h5>
          <button onClick={this.switchModals('login')}>Sign Up</button>
        </Modal>
      </div>
    );
  }
}

export default SplashButtons;
