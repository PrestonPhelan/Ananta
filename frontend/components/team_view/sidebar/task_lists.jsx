import React, { Component } from 'react';

class TaskLists extends Component {
  constructor(props) {
    super(props);

    this.userClick = this.userClick.bind(this);
    this.unassignedClick = this.unassignedClick.bind(this);
  }

  userClick() {
    this.props.fetchUserTasks(this.props.team.id);
  }

  unassignedClick() {
    this.props.fetchUnassignedTasks(this.props.team.id);
  }

  render() {
    return (
      <ul className='sidebar-list'>
        <li className='sidebar-list-item' onClick={this.userClick}>{"My Assigned Tasks"}</li>
        <li className='sidebar-list-item' onClick={this.unassignedClick}>{"Unassigned Tasks"}</li>
      </ul>
    );
  }
}

export default TaskLists;
