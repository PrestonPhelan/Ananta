import React from 'react';

export default props => (
  <ul className='list-item'>
    <li id='grabber' className='task-detail'><i className="fa fa-ellipsis-v" aria-hidden="true"></i></li>
    <li id='checkmark'>
      {props.task.completed ?
        <i id='completed-check' className="fa fa-check-circle" aria-hidden="true"></i> :
        <i id='incomplete-check' className="fa fa-check-circle-o" aria-hidden="true"></i>}
      </li>
    <li id='task-name' className='task-detail'>{props.task.name}</li>
    <li id='due-date' className='task-detail'>{props.task.due}</li>
  </ul>
);
