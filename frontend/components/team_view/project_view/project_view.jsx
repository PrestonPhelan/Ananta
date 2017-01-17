import React, { Component } from 'react';

class ProjectView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{this.props.project.name}</div>
    );
  }
}

export default ProjectView;
