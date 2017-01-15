import React from 'react';
import { hashHistory } from 'react-router';
import Modal from 'boron/ScaleModal';

import SessionModal from '../session_form/session_modal';


class SplashButtons extends React.Component {
  constructor(props) {
    super(props);
    this.signUpClick = this.signUpClick.bind(this);
    this.logInClick = this.logInClick.bind(this);
    this.hideSignUp = this.hideSignUp.bind(this);
    this.hideLogIn = this.hideLogIn.bind(this);
    this.switchModals = this.switchModals.bind(this);
  }

  signUpClick() {
    this.refs.signUpModal.show();
  }

  logInClick() {
    this.refs.logInModal.show();
  }

  hideSignUp() {
    this.refs.signUpModal.hide();
    this.props.resetErrors();
  }

  hideLogIn() {
    this.refs.logInModal.hide();
    this.props.resetErrors();
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
        <button
          className='session-button demo-button'
          onClick={this.props.demoLogin}>
          DEMO
        </button>

        <button
          className='session-button'
          onClick={this.signUpClick}>
          SIGN UP
        </button>

        <button
          className='session-button'
          onClick={this.logInClick}>
          LOG IN
        </button>

        <Modal
          className='session-modal-box'
          ref="signUpModal"
          onHide={this.props.resetErrors}>
          <SessionModal
            className='session-modal'
            formType="signup"
            switchModals={this.switchModals}
            hide={this.hideSignUp}
            />
        </Modal>

        <Modal
          className='session-modal-box'
          ref="logInModal"
          onHide={this.props.resetErrors}>
          <SessionModal
            className='session-modal'
            formType="login"
            switchModals={this.switchModals}
            hide={this.hideLogIn}
            />
        </Modal>
      </div>
    );
  }
}

export default SplashButtons;
