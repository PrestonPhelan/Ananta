import React, { Component } from 'react';

import TaskListContainer from './task_list_container';

class ProjectView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='project-view'>
        <h3>{this.props.project.name}</h3>
        <TaskListContainer />
      </div>
    );
  }
}

export default ProjectView;
