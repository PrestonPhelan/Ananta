import React, { Component } from 'react';
import Modal from 'boron/ScaleModal';

import EditProfileContainer from './edit_profile_container';
import UserDropdownContainer from './user_dropdown_container';

class UserControl extends Component {
  constructor(props) {
    super(props);
    this.state = { hidden: true };

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.clearDropdown = this.clearDropdown.bind(this);


    console.log(this.showModal);
  }

  toggleDropdown() {
    const currentValue = this.state.hidden;
    this.setState( { hidden: !currentValue } );
  }

  clearDropdown() {
    this.setState( { hidden: true } );
  }



  render() {
    let icon;

    if (this.props.currentUser.image_url) {
      icon = (
        <div className="custom-image">
          <img className='user-image' src={this.props.currentUser.image_url} onClick={this.toggleDropdown}/>
        </div>);
    } else {
      icon = (
        <i
          className="fa fa-user-circle"
          aria-hidden="true"
          onClick={this.toggleDropdown}></i>
      );
    }

    return (
     <div id='user-control' tabIndex={0} onBlur={this.clearDropdown}>
       {icon}
       <UserDropdownContainer hidden={this.state.hidden} modal={this.refs.editProfile}/>

       <Modal className='create-team-modal-box' ref="editProfile">
         <button className='close-modal' onClick={this.hide}>X</button>
         <EditProfileContainer showModal={this.showModal} hideModal={this.hide} />
       </Modal>
     </div>
   );
  }
}

export default UserControl;
