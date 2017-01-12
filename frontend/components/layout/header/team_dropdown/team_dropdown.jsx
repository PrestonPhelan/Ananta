import React, { Component } from 'react';

import TeamListContainer from './team_list_container';

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
        <div id='team-dropdown' className='dropdown'>
          <TeamListContainer />
        </div>
      );
    }
  }
}


export default TeamDropdown;
