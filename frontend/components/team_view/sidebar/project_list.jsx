import React, { Component } from 'react';
import Modal from 'boron/ScaleModal';

import CreateProjectContainer from '../create_project_container.jsx';

class ProjectList extends Component {
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
    const projectNames = Object.values(this.props.projects).map( project => (
      <li
        className='sidebar-list-item'
        key={project.id}>
        {project.name}
      </li>
    ));

    return (
      <div className='sidebar-list'>
        <div id="sidebar-project-header">
          <div>{"PROJECTS"}</div>
          <i
            id='sidebar-project-add'
            className="fa fa-plus-square"
            onClick={this.createProjectClick}
            aria-hidden="true"></i>
        </div>
        <ul className='sidebar-list-sublist'>
          {projectNames}
        </ul>

        <Modal className='create-project-modal-box' ref="createProjectModal">
          <button className='close-modal' onClick={this.hide}>X</button>
          <CreateProjectContainer
            hideModal={this.hide}
            resetErrors={this.props.resetErrors}/>
        </Modal>
      </div>
    );
  }
}

export default ProjectList;
