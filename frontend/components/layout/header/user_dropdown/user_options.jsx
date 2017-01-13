import React, { Component } from 'react';

class UserOptions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul className='user-options'>
          <li className='list-label'>{this.props.user.toUpperCase()}</li>
          <li className='option'>Task Summary</li>
          <li className='option'>Edit Profile</li>
          <li
            id='user-options-logout'
            className='option'
            onClick={this.props.logout}>
          Logout
          </li>
        </ul>
      </div>
    );
  }
}

export default UserOptions;
