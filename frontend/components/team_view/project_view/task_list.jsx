import React, { Component } from 'react';

import TaskListItemContainer from './task_list_item_container';

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.createBlankTask = this.createBlankTask.bind(this);
  }

  componentDidMount() {
  }

  createBlankTask() {
    this.props.createTask({ name: "", project_id: this.props.project.id, creator_id: this.props.currentUser.id });
  }

  render() {
    let taskList;
    if (this.props.tasks) {
      taskList = Object.values(this.props.tasks).map( task => <TaskListItemContainer task={task} />);
    } else {
      taskList = "";
    }

    return (
      <ul>
        {taskList}
        <ul id='new-task-dummy' className='list-item'>
          <div onClick={this.createBlankTask}>
            {"Enter a new task here"}
           </div>
        </ul>
      </ul>
    );
  }
}

export default TaskList;
