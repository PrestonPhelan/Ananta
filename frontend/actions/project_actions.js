import * as ProjectApiUtil from '../util/project_api_util';

import { receiveErrors } from './session_actions';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';

export const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects
});

export const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
});

export const fetchProjects = teamId => dispatch => (
  ProjectApiUtil.fetchProjects(teamId)
    .then ( projects => dispatch(receiveProjects(projects)))
);

export const createProject = project => dispatch => (
  ProjectApiUtil.createProject(project)
    .then(savedProject => {
      dispatch(receiveProject(savedProject));
      dispatch(receiveErrors([]));
    },
      err => dispatch(receiveErrors(err.responseJSON))
    )
);
