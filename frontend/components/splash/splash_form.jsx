import React from 'react';
import { hashHistory } from 'react-router';
import Modal from 'boron/ScaleModal';

import SessionModal from '../session_form/session_modal';
import SplashButtons from './splash_buttons';

class SplashForm extends SplashButtons {
  render() {
    return (
      <div>
        <h3 className='splash-head'>{"WELCOME TO ANANTA"}</h3>
        <button className='splash-content-button' onClick={this.demoClick}>DEMO LOGIN</button> <br />
      </div>
    );
  }
}

export default SplashForm;
