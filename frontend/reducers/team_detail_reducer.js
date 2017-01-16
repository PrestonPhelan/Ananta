import merge from 'lodash/merge';
import union from 'lodash/merge';

import { ACTIVATE_TEAM, RECEIVE_MEMBER } from '../actions/team_actions';
import { RECEIVE_PROJECT } from '../actions/project_actions';

const TeamDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case ACTIVATE_TEAM:
      return action.team;
    case RECEIVE_PROJECT:
      let currentProjects = state.projects;
      let newProjects = currentProjects.concat([action.project]);
      let newState = merge({}, state, { projects: newProjects });
      return newState;
    case RECEIVE_MEMBER:
      let currentMembers = state.members;
      let newMembers = currentMembers.concat([action.member]);
      newState = merge({}, state, { members: newMembers });
      return newState;
    default:
      return state;
  }
};

export default TeamDetailReducer;
