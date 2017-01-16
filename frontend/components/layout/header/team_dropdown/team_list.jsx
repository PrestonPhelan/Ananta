import React, { Component } from 'react';
import Modal from 'boron/ScaleModal';

import TeamListItem from './team_list_item';
import NewTeamFormContainer from '../../../team_select/new_team_form_container';

class TeamList extends Component {
  constructor(props) {
    super(props);
    this.hide = this.hide.bind(this);
    this.createTeamClick = this.createTeamClick.bind(this);
  }

  createTeamClick() {
    this.refs.createTeamModal.show();
  }

  hide() {
    this.refs.createTeamModal.hide();
    this.props.resetErrors();
  }

  componentDidMount() {
    this.props.fetchTeams();
  }

  render() {
    let teams;
    if (this.props.teams) {
      teams = Object.values(this.props.teams).map(team => (
        <TeamListItem team={team} key={team.id} />
      ));
    } else {
      teams = <div></div>;
    }

    return (
      <div>
        <ul className='dropdown-list'>
          <li className='list-label'>SELECT TEAM</li>
          {teams}
          <li
            id='team-dropdown-new-team'
            className='option'
            onClick={this.createTeamClick}>CREATE NEW TEAM</li>
        </ul>

        <Modal className='create-team-modal-box' ref="createTeamModal">
          <button className='close-modal' onClick={this.hide}>X</button>
          <NewTeamFormContainer className='create-team-modal' hideModal={this.hide}/>
        </Modal>
      </div>
    );
  }
}

export default TeamList;
