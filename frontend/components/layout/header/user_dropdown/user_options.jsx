import React, { Component } from 'react';
import { hashHistory } from 'react-router';


class UserOptions extends Component {
  constructor(props) {
    super(props);

    this.showModal = this.showModal.bind(this);
    this.hide = this.hide.bind(this);

    this.toTeamPage = this.toTeamPage.bind(this);
  }

  showModal() {
    this.props.modal.show();
  }

  hide() {
    this.props.modal.hide();
  }

  toTeamPage() {
    hashHistory.push('/app/teams');
    this.props.clearDropdown();
  }

  render() {
    return (
      <div>
        <ul className='user-options'>
          <li className='option user-option' onClick={this.toTeamPage}>{"My Teams"}</li>
          <li className='option user-option' onClick={this.showModal}>Edit Profile</li>
          <li
            id='user-options-logout'
            className='option user-option'
            onClick={this.props.logout}>
          Logout
          </li>
        </ul>


      </div>
    );
  }
}

export default UserOptions;
