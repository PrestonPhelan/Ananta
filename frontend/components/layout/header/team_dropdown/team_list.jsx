import React, { Component } from 'react';
import Modal from 'boron/ScaleModal';

import TeamListItem from './team_list_item';


class TeamList extends Component {
  constructor(props) {
    super(props);
    this.hide = this.hide.bind(this);
    this.createTeamClick = this.createTeamClick.bind(this);
  }

  createTeamClick() {
    this.props.modal.show();
  }

  hide() {
    this.props.modal.hide();
    this.props.resetErrors();
  }

  componentDidMount() {
    this.props.fetchTeams();
  }

  render() {
    let teams;
    if (this.props.teams) {
      teams = Object.values(this.props.teams).map(team => (
        <TeamListItem team={team} key={team.id} clearDropdown={this.props.clearDropdown}/>
      ));
    } else {
      teams = <div></div>;
    }

    return (
      <ul className='dropdown-list'>
        {teams}
        <li
          id='team-dropdown-new-team'
          className='option'
          onClick={this.createTeamClick}>CREATE NEW TEAM</li>
      </ul>
    );
  }
}

export default TeamList;
