import React, { Component } from 'react';
import Modal from 'boron/ScaleModal';

import CreateProjectContainer from './create_project_container.jsx';

class EmptyTeamSplash extends Component {
  constructor(props) {
    super(props);
    this.createProjectClick = this.createProjectClick.bind(this);
    this.hide = this.hide.bind(this);
  }

  createProjectClick() {
    this.refs.createProjectModal.show();
  }

  hide() {
    this.refs.createProjectModal.hide();
    this.props.resetErrors();
  }

  render() {
    return (
      <div>
        <div id='empty-team-splash'>
          <h3 id='empty-team-splash-header'>{"GET STARTED"}</h3>
          <button id='empty-team-splash-button' onClick={this.createProjectClick}>{"Create Project"}</button>
        </div>

        <Modal className='create-project-modal-box' ref="createProjectModal">
          <button className='close-modal' onClick={this.hide}>X</button>
          <CreateProjectContainer hideModal={this.hide} resetErrors={this.props.resetErrors}/>
        </Modal>
      </div>
    );
  }
}

export default EmptyTeamSplash;
