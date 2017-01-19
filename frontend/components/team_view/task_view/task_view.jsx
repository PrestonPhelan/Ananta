import React, { Component } from 'react';

import TaskDetailHeader from './task_detail_header';
import TaskDetailMain from './task_detail_main';

class TaskView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='task-view'>
        <TaskDetailHeader task={this.props.task} />
        <TaskDetailMain task={this.props.task}/>
        <textarea id='description-text' placeholder='Description'/>
      </div>
    );
  }
}

export default TaskView;
