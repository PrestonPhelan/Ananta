import React, { Component } from 'react';

class TaskDetailMain extends Component {
  constructor(props) {
    super(props);

    this.state = { name: this.props.task.name};

    this.checkClick = this.checkClick.bind(this);
    this.update = this.update.bind(this);
    this.updateName = this.updateName.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if(this.props !== newProps) {
      this.setState({ name: newProps.task.name});
    }
  }

  update(e) {
    this.setState( { name: e.target.value } );
  }

  checkClick() {
    this.props.updateTask( { id: this.props.task.id, completed: !this.props.task.completed } );
  }

  updateName() {
    this.props.updateTask( { id: this.props.task.id, name: this.state.name } );
  }

  render() {
    return (
      <div id='task-detail-main'>
        <div id='task-detail-checkmark'>{this.props.task.completed ?
          <i id='completed-check' className="fa fa-check-circle" aria-hidden="true" onClick={this.checkClick}></i> :
          <i id='incomplete-check' className="fa fa-check-circle-o" aria-hidden="true" onClick={this.checkClick}></i>}
        </div>
        <input id='task-detail-name' value={this.state.name} onChange={this.update} onBlur={this.updateName}/>
      </div>
    );
  }
}

export default TaskDetailMain;
