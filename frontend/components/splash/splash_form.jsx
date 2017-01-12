import React from 'react';
import { hashHistory } from 'react-router';
import Modal from 'boron/ScaleModal';


class SplashForm extends React.Component {
  constructor(props) {
    super(props);
  }

  redirectLoggedIn() {
    //TODO Add real redirect
    if (window.currentUser) {
      //Redirect code
      console.log("Will redirect");
    } else {
      //Do nothing
      console.log("Won't redirect");
    }
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
