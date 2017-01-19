import React, { Component } from 'react';
import Modal from 'boron/ScaleModal';

import TeamDropdownContainer from './team_dropdown_container';
import NewTeamFormContainer from '../../../team_select/new_team_form_container';

class TeamControl extends Component {
  constructor(props) {
    super(props);
    this.state = { hidden: true };

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.clearDropdown = this.clearDropdown.bind(this);
    this.hide = this.hide.bind(this);
  }

  clearDropdown() {
    this.setState( { hidden: true } );
  }

  hide() {
    this.refs.createTeamModal.hide();
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
      <TeamDropdownContainer
        hidden={this.state.hidden}
        modal={this.refs.createTeamModal}
        clearDropdown={this.clearDropdown}
      />
      <Modal className='create-team-modal-box' ref="createTeamModal">
        <button className='close-modal' onClick={this.hide}>X</button>
        <NewTeamFormContainer className='create-team-modal' hideModal={this.hide} clearDropdown={this.clearDropdown}/>
      </Modal>
    </div>

    );
  }
}

export default TeamControl;
