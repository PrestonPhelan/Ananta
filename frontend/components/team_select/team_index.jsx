import React, { Component } from 'react';

import TeamIndexItem from './team_index_item';

class TeamIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTeams();
  }

  render() {
    console.log(this.props.teams);
    const mappedTeams = Object.values(this.props.teams).map(team => (
      <TeamIndexItem key={team.id} team={team} />
    ));

    return (
      <ul>
        <h3>{"This is the Team Index"}</h3>
        {mappedTeams}
      </ul>
    );
  }
}

export default TeamIndex;
