import React, { Component } from 'react';

class ProjectView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='project-view'>
        <h3>{this.props.project.name}</h3>
      </div>
    );
  }
}

export default ProjectView;
