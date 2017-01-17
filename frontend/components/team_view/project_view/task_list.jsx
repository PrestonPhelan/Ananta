import React from 'react';

import TaskListItem from './task_list_item';

export default props => {
  let taskList;
  if (props.tasks) {
    taskList = props.tasks.map( task => <TaskListItem task={task} key={task.id} />);
  } else {
    taskList = "";
  }

  return (
    <div>
      {taskList}
    </div>
  );
};
