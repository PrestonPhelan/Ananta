import React, { Component } from 'react';
import { Field } from 'react-redux-form';

class TaskListItem extends Component {
  constructor(props) {
    super(props);

    this.updateTask = this.updateTask.bind(this);
  }

  updateTask() {
  }

  render() {
    const intToMonth = int => {
      switch(int) {
        case 1:
        return 'Jan';
        case 2:
        return 'Feb';
        case 3:
        return 'Mar';
        case 4:
        return 'Apr';
        case 5:
        return 'May';
        case 6:
        return 'Jun';
        case 7:
        return 'Jul';
        case 8:
        return 'Aug';
        case 9:
        return 'Sep';
        case 10:
        return 'Oct';
        case 11:
        return 'Nov';
        case 12:
        return 'Dec';
        default:
        return 'MonthErr';
      }
    };

    const date = new Date(this.props.task.due);
    const dateMonth = intToMonth(date.getMonth() + 1);

    const dateString = `${dateMonth} ${date.getDate() + 1}`;

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
              <i id='completed-check' className="fa fa-check-circle" aria-hidden="true"></i> :
              <i id='incomplete-check' className="fa fa-check-circle-o" aria-hidden="true"></i>}
          </li>
          <li id='task-name' className='task-detail'>
            <input
              type="text"
              defaultValue={this.props.task.name}
              onBlur={() => console.log("I'm the onBlur!")}
                />
          </li>
          <li>{userImg}</li>
          <li id='due-date' className='task-detail'>{dateString}</li>
        </ul>
      </li>
    );
  }
}

export default TaskListItem;
