import React, { Component } from 'react';

import TeamDropdownContainer from './team_dropdown_container';

class TeamControl extends Component {
  constructor(props) {
    super(props);
    this.state = { hidden: true };

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    const currentValue = this.state.hidden;
    this.setState( { hidden: !currentValue } );
  }

  render () {
    return (
    <div id='team-control'>
      <i
        className="fa fa-users"
        aria-hidden="true"
        onClick={this.toggleDropdown}></i>
      <TeamDropdownContainer hidden={this.state.hidden} />
    </div>
    );
  }
}

export default TeamControl;
