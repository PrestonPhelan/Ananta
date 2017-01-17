import * as TeamApiUtil from '../util/team_api_util';

import { receiveErrors } from './session_actions';

export const RECEIVE_TEAMS = 'RECEIVE_TEAMS';
export const RECEIVE_TEAM = 'RECEIVE_TEAM';
export const ACTIVATE_TEAM = 'ACTIVATE_TEAM';
export const RECEIVE_MEMBER = 'RECEIVE_MEMBER';

export const receiveTeams = teams => ({
  type: RECEIVE_TEAMS,
  teams
});

export const receiveTeam = team => ({
  type: RECEIVE_TEAM,
  team
});

export const activateTeam = team => ({
  type: ACTIVATE_TEAM,
  team
});

export const receiveMember = member => ({
  type: RECEIVE_MEMBER,
  member
});

export const fetchTeams = () => dispatch => (
  TeamApiUtil.fetchTeams()
    .then( teams => dispatch(receiveTeams(teams)))
);

export const fetchTeam = id => dispatch => (
  TeamApiUtil.fetchTeam(id)
    .then( team => {
      dispatch(activateTeam(team));
      return team;
    })
);

export const createTeam = team => dispatch => (
  TeamApiUtil.createTeam(team)
    .then(
      savedTeam => {
        dispatch(receiveTeam(savedTeam));
        dispatch(receiveErrors([]));
        return savedTeam.id;
      },
      err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const addMembers = (members, teamId) => dispatch => {
  Object.values(members).forEach( member => {
    TeamApiUtil.addMember(member, member.id, teamId)
      .then( newMember => dispatch(receiveMember(newMember)));
  });
};
