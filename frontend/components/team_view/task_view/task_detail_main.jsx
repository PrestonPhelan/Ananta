import React, { Component } from 'react';

class TaskDetailMain extends Component {
  render() {
    return (
      <div>
        {this.props.task.completed ?
          <i id='completed-check' className="fa fa-check-circle" aria-hidden="true" onClick={this.updateCompleted}></i> :
          <i id='incomplete-check' className="fa fa-check-circle-o" aria-hidden="true" onClick={this.updateCompleted}></i>}
        {this.props.task.name}
      </div>
    );
  }
}

export default TaskDetailMain;
