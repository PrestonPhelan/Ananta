import React, { Component } from 'react';

class TaskLists extends Component {
  render() {
    return (
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>{"My Assigned Tasks"}</li>
        <li className='sidebar-list-item'>{"Unassigned Tasks"}</li>
      </ul>
    );
  }
}

export default TaskLists;
