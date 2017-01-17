import React from 'react';

export default props => (
  <ul>
    <li>{"Completed: "}{props.task.completed ? "True" : "False"}</li>
    <li>{props.task.name}</li>
    <li>{props.task.due}</li>
  </ul>
);
