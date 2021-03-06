import React, { Component, PropTypes } from 'react';
import Modal from 'boron/ScaleModal';
import AutosizeInput from 'react-input-autosize';
import KeyBinding from 'react-keybinding-component';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import flow from 'lodash/flow';

import AssignMemberModalContainer from '../assign_member_modal_container';
import { getDateString } from '../../../util/date_util';
import ItemTypes from './item_types';


const taskSource = {
  beginDrag(props) {
    return {
      id: props.task.id,
      index: props.task.index
    };
  }
};

const taskTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;
    if (dragIndex === hoverIndex) {
      return;
    }

    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    const clientOffset = monitor.getClientOffset();
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    props.moveTask(dragIndex, hoverIndex);

    monitor.getItem().index = hoverIndex;
  }
};

class TaskListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.task.name };

    this.activateTask = this.activateTask.bind(this);
    this.submitUpdate = this.submitUpdate.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateCompleted = this.updateCompleted.bind(this);
    this.submitAndCreateBlankTask = this.submitAndCreateBlankTask.bind(this);
    this.deleteIfEmpty = this.deleteIfEmpty.bind(this);

    this.showModal = this.showModal.bind(this);
    this.hide = this.hide.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.props !== newProps) {
      this.setState( { name: newProps.task.name } );
    }
  }

  activateTask() {
    this.props.fetchTask()
      .then( () => document.getElementById(this.props.task.id).focus() );
  }

  updateName(e) {
    this.setState( { name: e.target.value } );
  }

  updateCompleted(e) {
    const updatedCompleteStatus = !this.props.task.completed;
    const updatedTask = {
      id: this.props.task.id,
      completed: updatedCompleteStatus
    };
    this.props.updateTask(updatedTask);
  }

  submitUpdate(e) {
    const updatedTask = { id: this.props.task.id, name: this.state.name };
    this.props.updateTask(updatedTask);
  }

  submitAndCreateBlankTask(e) {
    e.preventDefault();
    this.submitUpdate(e);
    this.props.createTask({
      name: "",
      project_id: this.props.project.id,
      creator_id: this.props.currentUser.id })
      .then(
        task => document.getElementById(task.id).focus()
      );
  }

  deleteIfEmpty(e) {
    if (e.keyCode === 8 && this.state.name === "") {
      this.props.deleteTask(this.props.task.id);
      return;
    }
  }

  showModal() {
      this.refs.assignMemberModal.show();
  }

  hide() {
    this.refs.assignMemberModal.hide();
  }

  render() {
    // const printString = getDateString(this.props.task.due);

    let userImg;
    if (this.props.task.assignee && this.props.task.assignee.id) {
      let icon;

      if (this.props.task.assignee.image_url) {
        icon = (
          <div>
            <img
              className='task-user-image'
              src={this.props.task.assignee.image_url}
            />
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
        userImg =
          <i
            id='no-assignee-img'
            className="fa fa-user-o"
            aria-hidden="true"
          ></i>;
        }

    const { isDragging, connectDragSource, connectDropTarget } = this.props;

    return connectDragSource(connectDropTarget(
      <li>
        <ul className='list-item'>
          <li id='grabber'><i className="fa fa-ellipsis-v" aria-hidden="true"></i></li>
          <li id='checkmark'>
            {this.props.task.completed ?
              <i
                id='completed-check'
                className="fa fa-check-circle"
                aria-hidden="true"
                onClick={this.updateCompleted}
              ></i> :
              <i
                id='incomplete-check'
                className="fa fa-check-circle-o"
                aria-hidden="true"
                onClick={this.updateCompleted}></i>}
          </li>
          <li id='task-name' className='task-detail'>
            <form onSubmit={this.submitAndCreateBlankTask}>
              <AutosizeInput
                className='task-name-input'
                type="text"
                id={this.props.task.id}
                minWidth={400}
                value={this.state.name}
                onChange={this.updateName}
                onBlur={this.submitUpdate}
                onClick={this.activateTask}
                  />
                <KeyBinding onKey={this.deleteIfEmpty} />
                <div hidden><input type='submit' /></div>
              </form>
          </li>
          <li onClick={this.showModal}>{userImg}</li>
        </ul>

        <Modal ref="assignMemberModal">
          <button className='close-modal' onClick={this.hide}>X</button>
          <AssignMemberModalContainer
            hideModal={this.hide}
            task={this.props.task}
          />
        </Modal>
      </li>
    ));
  }
}

export default flow(
  DragSource(ItemTypes.TASK, taskSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })),
  DropTarget(ItemTypes.TASK, taskTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  }))
)(TaskListItem);
