import React, { Component } from 'react';
import Modal from 'boron/ScaleModal';

import NewTeamFormContainer from './new_team_form_container';

class NewTeam extends Component {
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
  }

  render() {
    return (
      <div id='new-team-item' className='team-index-item' onClick={this.createTeamClick}>
        <div id='create-team-plus'>
          {"+"}
        </div>
        <div id='create-team-text'>
          {"Create New Team"}
        </div>

        <Modal className='create-team-modal-box' ref="createTeamModal">
          <button className='close-modal' onClick={this.hide}>X</button>
          <NewTeamFormContainer />
        </Modal>
      </div>

    );
  }
}

export default NewTeam;
