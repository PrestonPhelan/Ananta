import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import TeamsReducer from './teams_reducer';
import TeamDetailReducer from './team_detail_reducer';
import UsersReducer from './users_reducer';
import ProjectDetailReducer from './projects_reducer';
import TaskDetailReducer from './task_detail_reducer';

export default combineReducers({
  session: SessionReducer,
  teams: TeamsReducer,
  teamDetail: TeamDetailReducer,
  users: UsersReducer,
  projectDetail: ProjectDetailReducer,
  taskDetail: TaskDetailReducer
});
