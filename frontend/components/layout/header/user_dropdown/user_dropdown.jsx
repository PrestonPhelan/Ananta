import React, { Component } from 'react';

import UserOptionsContainer from './user_options_container';

class UserDropdown extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.hidden) {
      return (
        <div></div>
      );
    } else {
      return (
        <div id='user-dropdown' className='dropdown'>
          <UserOptionsContainer
            modal={this.props.modal}
            clearDropdown={this.props.clearDropdown} />
        </div>
      );
    }
  }
}


export default UserDropdown;
