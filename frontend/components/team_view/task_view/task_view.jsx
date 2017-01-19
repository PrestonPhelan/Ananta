import React, { Component } from 'react';

import TaskDetailHeader from './task_detail_header';
import TaskDetailMain from './task_detail_main';

class TaskView extends Component {
  constructor(props) {
    super(props);

    this.state = { description: this.props.task.description };

    this.update = this.update.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
  }

  update(e) {
    this.setState( { description: e.target.value } );
  }

  updateDescription() {
    this.props.updateTask( { id: this.props.task.id, description: this.state.description } );
  }

  render() {
    return (
      <div id='task-view'>
        <TaskDetailHeader task={this.props.task} />
        <TaskDetailMain task={this.props.task} updateTask={this.props.updateTask}/>
        <textarea id='description-text' placeholder='Description' onChange={this.update} onBlur={this.updateDescription}/>
      </div>
    );
  }
}

export default TaskView;
