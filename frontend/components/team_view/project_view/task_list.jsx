import React from 'react';
import { Field } from 'react-redux-form';

import TaskListItem from './task_list_item';

export default props => {
  let taskList;
  if (props.tasks) {
    taskList = props.tasks.map( task => <TaskListItem task={task} key={task.id} />);
  } else {
    taskList = "";
  }

  return (
    <ul>
      {taskList}
      <ul className='list-item'>
        <Field
          model="task.name"
          changeAction={() => console.log("Successful change")}
          updateOn="blur"
          >
          <input
            type="text"
            placeholder="Enter a new task here"
             />
         </Field>
      </ul>
    </ul>
  );
};
