import React, { Component } from 'react';

import UserDropdownContainer from './user_dropdown_container';

class UserControl extends Component {
  constructor(props) {
    super(props);
    this.state = { hidden: true };

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    const currentValue = this.state.hidden;
    this.setState( { hidden: !currentValue } );
  }

  render() {
    return (
     <div id='user-control'>
       <i
         className="fa fa-user-circle"
         aria-hidden="true"
         onClick={this.toggleDropdown}></i>
       <UserDropdownContainer hidden={this.state.hidden} />
     </div>
   );
  }
}

export default UserControl;
