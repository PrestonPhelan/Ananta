import React from 'react';

import SessionFormContainer from './session_form_container';

class SessionModal extends React.Component {
  render() {
    const switchText = this.props.formType === 'signup' ? "Have an account?" : "New to Ananta?";
    const buttonText = this.props.formType === 'signup' ? "log in" : "sign up";

    return (
      <div>
        <button className='close-modal' onClick={this.props.hide}>X</button>
        <SessionFormContainer formType={this.props.formType} />
        <h5>{switchText}</h5>
        <button
          className='session-button'
          onClick={this.props.switchModals(this.props.formType)}>
          {buttonText}
        </button>
      </div>
    );
  }
}

export default SessionModal;
