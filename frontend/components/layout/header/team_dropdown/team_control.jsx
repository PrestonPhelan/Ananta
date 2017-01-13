import React, { Component } from 'react';

import TeamDropdownContainer from './team_dropdown_container';

class TeamControl extends Component {
  constructor(props) {
    super(props);
    this.state = { hidden: true };

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.clearDropdown = this.clearDropdown.bind(this);
  }

  clearDropdown() {
    this.setState( { hidden: true } );
  }

  toggleDropdown() {
    const currentValue = this.state.hidden;
    this.setState( { hidden: !currentValue } );
  }

  render () {
    let icon;

    if (this.props.organization && this.props.organization.image_url) {
      icon = (<div>Image Available</div>);
    } else {
      icon = (
        <i
          className="fa fa-users"
          aria-hidden="true"
          onClick={this.toggleDropdown}></i>
      );
    }

    return (
    <div id='team-control' tabIndex={0} onBlur={this.clearDropdown}>
      {icon}
      <TeamDropdownContainer hidden={this.state.hidden} />
    </div>
    );
  }
}

export default TeamControl;
