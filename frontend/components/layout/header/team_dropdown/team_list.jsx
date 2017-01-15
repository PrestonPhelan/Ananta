import React, { Component } from 'react';

import TeamListItem from './team_list_item';

class TeamList extends Component {
  constructor(props) {
    super(props);
  }

  //TODO Remove test render Teams
  render() {
    let teams;
    if (this.props.teams) {
      teams = Object.values(this.props.teams).map(team => (
        <TeamListItem team={team} key={team.id} />
      ));
    } else {
      teams = (
      <div>
        <li className='option'>Team 1</li>
        <li className='option'>Team 2</li>
        <li className='option'>Team 3</li>
      </div>
      );
    }

    return (
      <div>
        <ul className='dropdown-list'>
          <li className='list-label'>SELECT TEAM</li>
          {teams}
          <li className='option'>Create New Team</li>
        </ul>
      </div>
    );
  }
}

export default TeamList;
