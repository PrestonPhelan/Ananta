import React, { Component } from 'react';

import { getDateString } from '../../../util/date_util';
import { getDisplayName } from '../../../util/name_util';

class TaskDetailHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let userImg;
    let userText;
    if (this.props.task.assignee && this.props.task.assignee.id) {
      let icon;
      userText = getDisplayName(this.props.task.assignee.username);
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
      userText = "Unassigned";
    }




    return (
      <div>
        <div>{userImg} {userText}</div>
        <div><i className="fa fa-calendar" aria-hidden="true"></i> {getDateString(this.props.task.due)}</div>
      </div>
    );

  }
}

export default TaskDetailHeader;
