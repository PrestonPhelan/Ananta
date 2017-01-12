import React from 'react';

import SessionFormContainer from './session_form_container';
import SessionModalButtonContainer from './session_modal_button_container';

class SessionModal extends React.Component {
  render() {
    const headText = this.props.formType === 'login' ? "LOG IN" : "SIGN UP";

    return (
      <div className='session-modal'>
        <button className='close-modal' onClick={this.props.hide}>X</button>
        <SessionModalButtonContainer switchModals={this.props.switchModals} formType={this.props.formType}/>
        <h1 className='form-title'>{headText}</h1>
        <SessionFormContainer formType={this.props.formType} />
      </div>
    );
  }
}

export default SessionModal;
