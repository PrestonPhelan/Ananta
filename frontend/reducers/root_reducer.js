import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import TeamsReducer from './teams_reducer';
import UsersReducer from './users_reducer';

export default combineReducers({
  session: SessionReducer,
  teams: TeamsReducer,
  users: UsersReducer
});
