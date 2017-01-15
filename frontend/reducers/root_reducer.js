import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import TeamsReducer from './teams_reducer';
import UsersReducer from './users_reducer';
import ProjectsReducer from './project_reducer';

export default combineReducers({
  session: SessionReducer,
  teams: TeamsReducer,
  users: UsersReducer,
  projects: ProjectsReducer
});
