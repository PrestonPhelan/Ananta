import React, { Component } from 'react';

import TaskListItem from './task_list_item';

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
      taskList = this.props.tasks.map( task => <TaskListItem task={task} key={task.id} />);
    } else {
      taskList = "";
    }

    return (
      <ul>
        {taskList}
        <ul id='new-task-dummy' className='list-item' onClick={this.createBlankTask}>
          <input
              type="text"
              placeholder="Enter a new task here"
              onBlur={() => console.log("I'm the onBlur!")}
               />
        </ul>
      </ul>
    );
  }
}

export default TaskList;
