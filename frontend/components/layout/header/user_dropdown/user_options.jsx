import React, { Component } from 'react';



class UserOptions extends Component {
  constructor(props) {
    super(props);

    this.showModal = this.showModal.bind(this);
    this.hide = this.hide.bind(this);
  }

  showModal() {
    this.props.modal.show();
  }

  hide() {
    this.props.modal.hide();
  }

  render() {
    return (
      <div>
        <ul className='user-options'>
          <li className='list-label'>{this.props.user.username.toUpperCase()}</li>
          <li className='option' onClick={this.showModal}>Edit Profile</li>
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
