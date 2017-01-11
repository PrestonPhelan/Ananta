import React from 'react';

import SessionFormContainer from './session_form_container';

class SessionModal extends React.Component {
  render() {
    const switchText = this.props.formType === 'signup' ? "Have an account?" : "New to Ananta?";
    const buttonText = this.props.formType === 'signup' ? "LOG IN" : "SIGN UP";
    const headText = this.props.formType === 'login' ? "LOG IN" : "SIGN UP";

    return (
      <div className='session-modal'>
        <h1 className='form-title'>{buttonText}</h1>
        <button
          className='session-button demo-button'
          onClick={() => console.log("This will log in guest account!")}>
          DEMO
        </button>
        <button className='close-modal' onClick={this.props.hide}>X</button>
        <h5>{switchText}</h5>
        <button
          className='session-button'
          onClick={this.props.switchModals(this.props.formType)}>
          {buttonText}
        </button>
        <SessionFormContainer formType={this.props.formType} />
      </div>
    );
  }
}

export default SessionModal;
