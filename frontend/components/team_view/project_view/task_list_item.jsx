import React, { Component } from 'react';
import Modal from 'boron/ScaleModal';

import AssignMemberModalContainer from '../assign_member_modal_container';
import { getDateString } from '../../../util/date_util';

class TaskListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.task.name };

    this.activateTask = this.activateTask.bind(this);
    this.submitUpdate = this.submitUpdate.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateCompleted = this.updateCompleted.bind(this);

    this.showModal = this.showModal.bind(this);
    this.hide = this.hide.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.props !== newProps) {
      this.setState( { name: newProps.task.name } );
    }
  }

  activateTask() {
    this.props.fetchTask();
  }

  updateName(e) {
    this.setState( { name: e.target.value } );
  }

  updateCompleted(e) {
    const updatedCompleteStatus = !this.props.task.completed;
    const updatedTask = { id: this.props.task.id, completed: updatedCompleteStatus };
    this.props.updateTask(updatedTask);
  }

  submitUpdate(e) {
    const updatedTask = { id: this.props.task.id, name: this.state.name };
    this.props.updateTask(updatedTask);
  }

  showModal() {
      this.refs.assignMemberModal.show();
  }

  hide() {
    this.refs.assignMemberModal.hide();
  }

  render() {
    const printString = getDateString(this.props.task.due);

    let userImg;
    if (this.props.task.assignee && this.props.task.assignee.id) {
      let icon;

      if (this.props.task.assignee.image_url) {
        icon = (
          <div>
            <img className='task-user-image' src={this.props.task.assignee.image_url}/>
          </div>);
        } else {
          icon = (
            <i
              className="fa fa-user-circle"
              aria-hidden="true"
              ></i>
          );
        }
        userImg = icon;
      } else {
        userImg = <i id='no-assignee-img' className="fa fa-user-o" aria-hidden="true"></i>;
        }

    return (
      <li>
        <ul className='list-item'>
          <li id='grabber' className='task-detail'><i className="fa fa-ellipsis-v" aria-hidden="true"></i></li>
          <li id='checkmark'>
            {this.props.task.completed ?
              <i id='completed-check' className="fa fa-check-circle" aria-hidden="true" onClick={this.updateCompleted}></i> :
              <i id='incomplete-check' className="fa fa-check-circle-o" aria-hidden="true" onClick={this.updateCompleted}></i>}
          </li>
          <li id='task-name' className='task-detail'>
            <input
              type="text"
              value={this.state.name}
              onChange={this.updateName}
              onBlur={this.submitUpdate}
              onClick={this.activateTask}
                />
          </li>
          <li id='due-date' className='task-detail'>{printString}</li>
          <li onClick={this.showModal}>{userImg}</li>
        </ul>

        <Modal ref="assignMemberModal">
          <button className='close-modal' onClick={this.hide}>X</button>
          <AssignMemberModalContainer hideModal={this.hide} task={this.props.task}/>
        </Modal>
      </li>
    );
  }
}

export default TaskListItem;
