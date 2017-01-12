import React from 'react';

class SessionModalButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const switchText = this.props.formType === 'signup' ? "Have an account?" : "New to Ananta?";
    const buttonText = this.props.formType === 'signup' ? "LOG IN" : "SIGN UP";

    return(
      <div className='session-modal-buttons'>
        <div className='session-modal-demo'>
          <h5>{"Tour as Guest"}</h5>
          <button
            className='session-button demo-button'
            onClick={this.props.demoLogin}>
            DEMO
          </button>
        </div>
        <div className='session-modal-switch'>
          <h5>{switchText}</h5>
          <button
            className='session-button'
            onClick={this.props.switchModals(this.props.formType)}>
            {buttonText}
          </button>
        </div>
      </div>
    );
  }
}

export default SessionModalButtons;
