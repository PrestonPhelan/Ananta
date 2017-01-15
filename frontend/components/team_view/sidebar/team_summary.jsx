import React, { Component } from 'react';

import TeamSummaryMemberList from './team_summary_member_list';

class TeamSummary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span>
        <h2>{this.props.name}</h2>
        <TeamSummaryMemberList members={this.props.members} />
      </span>
    );
  }
}

export default TeamSummary;
