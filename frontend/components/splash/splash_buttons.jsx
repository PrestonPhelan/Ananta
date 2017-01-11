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
      <div className='splash-buttons'>
        <button className='session-button' onClick={this.demoClick}>demo</button>
        <button className='session-button' onClick={this.signUpClick}>sign up</button>
        <button className='session-button' onClick={this.logInClick}>log in</button>

        <Modal className='session-modal' ref="signUpModal">
          <button className='close-modal' onClick={this.hideSignUp}>X</button>
          <SessionFormContainer formType="signup" />
          <h5>{"Have an account?"}</h5>
          <button className='session-button' onClick={this.switchModals('signup')}>Log In</button>
        </Modal>

        <Modal className='session-modal' ref="logInModal">
          <button className='close-modal' onClick={this.hideLogIn}>X</button>
          <SessionFormContainer formType="login" />
          <h5>{"New to Ananta?"}</h5>
          <button className='session-button' onClick={this.switchModals('login')}>Sign Up</button>
        </Modal>
      </div>
    );
  }
}

export default SplashButtons;
