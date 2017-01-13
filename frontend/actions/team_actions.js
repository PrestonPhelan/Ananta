import * as TeamApiUtil from '../util/team_api_util';

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
