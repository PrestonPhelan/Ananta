import React from 'react';

import TeamSummaryContainer from './team_summary_container';
import TaskLists from './task_lists';
import ProjectListContainer from './project_list_container';

export default () => {
  return (
    <div id='sidebar' className='col-1-5'>
      <TeamSummaryContainer />
      <TaskLists />
      <ProjectListContainer />
    </div>
  );
};
