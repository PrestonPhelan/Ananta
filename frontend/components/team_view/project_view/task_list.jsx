import React, { Component } from 'react';

import TaskListItemContainer from './task_list_item_container';

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = { filtered: false };

    this.createBlankTask = this.createBlankTask.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
  }

  componentDidMount() {

  }

  toggleFilter() {
    if (!this.state.filtered) {
      if (this.props.project.id === 'user') {
        this.props.fetchFilteredUserTasks(this.props.team.id);
      } else if (this.props.project.id === 'unassigned') {
        this.props.fetchFilteredUnassignedTasks(this.props.team.id);
      } else {
        this.props.fetchFilteredProject(this.props.project.id);
      }
    } else {
      switch (this.props.project.id) {
        case 'user':
          this.props.fetchUserTasks(this.props.team.id);
          break;
        case 'unassigned':
          this.props.fetchUnassignedTasks(this.props.team.id);
          break;
        default:
          this.props.fetchProject(this.props.project.id);
      }
    }
    this.setState({ filtered: !this.state.filtered });
  }

  createBlankTask() {
    this.props.createTask({
      name: "",
      project_id: this.props.project.id,
      creator_id: this.props.currentUser.id });
  }

  render() {
    let taskList;
    if (this.props.tasks) {
      taskList = Object.values(this.props.tasks).map( task =>
        <TaskListItemContainer
          task={task}
          key={task.id} />
      );
    } else {
      taskList = "";
    }

    let lastField;
    if (typeof this.props.project.id === "string") {
      lastField = (<div></div>);
    } else {
      lastField = (<ul id='new-task-dummy' className='list-item'>
        <div onClick={this.createBlankTask}>
          {"Enter a new task here"}
         </div>
      </ul>);
    }

    return (
      <div>
        <div id='completed-filter'>
          <div id='completed-filter-check'>{this.state.filtered ?
              <i id='incomplete-check' className="fa fa-check-circle-o" aria-hidden="true" onClick={this.toggleFilter}></i> :
              <i id='completed-check' className="fa fa-check-circle" aria-hidden="true" onClick={this.toggleFilter}></i>}</div>
          {"Show Completed"}
        </div>
        <ul>
          {taskList}
          {lastField}
        </ul>
      </div>
    );
  }
}

export default TaskList;
