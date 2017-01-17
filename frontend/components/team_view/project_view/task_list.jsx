import React from 'react';

import TaskListItem from './task_list_item';

export default props => {
  const taskList = props.tasks.map( task => <TaskListItem task={task} />);

  return (
    <div></div>
  );
};
