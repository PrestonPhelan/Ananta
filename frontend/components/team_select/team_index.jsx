import React, { Component } from 'react';

import TeamIndexItem from './team_index_item';
import NewTeam from './new_team';

class TeamIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTeams();
  }

  render() {
    const mappedTeams = Object.values(this.props.teams).map(team => (
      <TeamIndexItem key={team.id} team={team} />
    ));

    return (
      <ul className='team-index'>
        {mappedTeams}
        <NewTeam resetErrors={this.props.resetErrors}/>
      </ul>
    );
  }
}

export default TeamIndex;
