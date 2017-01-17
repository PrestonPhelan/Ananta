import React from 'react';

export default props => (
  <ul>
    <li>{"Completed: "}{props.task.completed}</li>
    <li>{props.task.name}</li>
    <li>{props.task.due}</li>
  </ul>
);
