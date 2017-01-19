import React, { Component } from 'react';
import Modal from 'boron/ScaleModal';

import AssignMemberModalContainer from '../assign_member_modal_container';
import { getDateString } from '../../../util/date_util';
import { getDisplayName } from '../../../util/name_util';

class TaskDetailHeader extends Component {
  constructor(props) {
    super(props);

    this.showModal = this.showModal.bind(this);
    this.hide = this.hide.bind(this);
  }

  showModal() {
      this.refs.assignMemberModal.show();
  }

  hide() {
    this.refs.assignMemberModal.hide();
  }

  render() {
    let userImg;
    let userText;
    if (this.props.task.assignee && this.props.task.assignee.id) {
      let icon;
      userText = getDisplayName(this.props.task.assignee.username);
      if (this.props.task.assignee.image_url) {
        icon = (<img id='task-detail-user' src={this.props.task.assignee.image_url} onClick={this.showModal} />);
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
      userImg = <i id='no-assignee-img' className="fa fa-user-o" aria-hidden="true" onClick={this.showModal} ></i>;
      userText = "Unassigned";
    }




    return (
      <div id='task-detail-header'>
        <div id='task-detail-assignee'>
          <div>{userImg}</div>
          <div id='task-detail-assignee-name'>{userText}</div>
        </div>
        <div><i className="fa fa-calendar" aria-hidden="true"></i> {getDateString(this.props.task.due)}</div>

        <Modal ref="assignMemberModal">
          <button className='close-modal' onClick={this.hide}>X</button>
          <AssignMemberModalContainer hideModal={this.hide} task={this.props.task}/>
        </Modal>
      </div>
    );

  }
}

export default TaskDetailHeader;
