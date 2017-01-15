import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import TeamsReducer from './teams_reducer';
import TeamDetailReducer from './team_detail_reducer';
import UsersReducer from './users_reducer';
import ProjectsReducer from './project_reducer';

export default combineReducers({
  session: SessionReducer,
  teams: TeamsReducer,
  teamDetail: TeamDetailReducer,
  users: UsersReducer,
  projects: ProjectsReducer
});
