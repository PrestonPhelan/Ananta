import React from 'react';
import { hashHistory } from 'react-router';
import Modal from 'boron/ScaleModal';


class SplashForm extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <h3 className='splash-head'>{"WELCOME TO ANANTA"}</h3>
        <button className='splash-content-button' onClick={this.props.demoLogin}>DEMO LOGIN</button> <br />
      </div>
    );
  }
}

export default SplashForm;
