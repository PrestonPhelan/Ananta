import * as TeamApiUtil from '../util/team_api_util';

import { receiveErrors } from './session_actions';

export const RECEIVE_TEAMS = 'RECEIVE_TEAMS';
export const RECEIVE_TEAM = 'RECEIVE_TEAM';

export const receiveTeams = teams => ({
  type: RECEIVE_TEAMS,
  teams
});

export const receiveTeam = team => ({
  type: RECEIVE_TEAM,
  team
});

export const fetchTeams = () => dispatch => (
  TeamApiUtil.fetchTeams()
    .then( teams => dispatch(receiveTeams(teams)))
);

export const createTeam = team => dispatch => (
  TeamApiUtil.createTeam(team)
    .then(
      savedTeam => {
        dispatch(receiveTeam(savedTeam));
        dispatch(receiveErrors([]));
      },
      err => dispatch(receiveErrors(err.responseJSON))
    )
);
