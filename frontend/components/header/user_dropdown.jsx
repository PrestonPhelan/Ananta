import React, { Component } from 'react';

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

        </div>
      );
    }
  }
}


export default UserDropdown;
