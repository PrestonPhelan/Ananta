import { ACTIVATE_TEAM } from '../actions/team_actions';

const TeamDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case ACTIVATE_TEAM:
      return action.team;
    default:
      return state;
  }
};

export default TeamDetailReducer;
