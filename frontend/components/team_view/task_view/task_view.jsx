import React, { Component } from 'react';

import TaskDetailHeader from './task_detail_header';
import TaskDetailMain from './task_detail_main';

class TaskView extends Component {
  constructor(props) {
    super(props);

    this.state = { description: this.props.task.description };

    this.update = this.update.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.clearActiveTask = this.clearActiveTask.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if(this.props !== newProps) {
      this.setState( { description: (newProps.task.description || "") } );
    }
  }

  update(e) {
    this.setState( { description: e.target.value } );
  }

  updateDescription() {
    this.props.updateTask( { id: this.props.task.id, description: this.state.description } );
  }

  clearActiveTask() {
    this.props.clearTask();
  }

  render() {
    return (
      <div id='task-view'>
        <button id='task-view-close' className='close-modal' onClick={this.clearActiveTask}>X</button>
        <TaskDetailHeader task={this.props.task} />
        <TaskDetailMain task={this.props.task} updateTask={this.props.updateTask}/>
        <textarea id='description-text' placeholder='Description' value={this.state.description} onChange={this.update} onBlur={this.updateDescription}/>
      </div>
    );
  }
}

export default TaskView;
