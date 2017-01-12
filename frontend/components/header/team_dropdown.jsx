import React, { Component } from 'react';

class TeamDropdown extends Component {
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
        <div id='team-dropdown'>

        </div>
      );
    }
  }
}


export default TeamDropdown;
