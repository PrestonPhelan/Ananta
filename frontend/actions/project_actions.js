import * as ProjectApiUtil from '../util/project_api_util';
import * as TaskApiUtil from '../util/task_api_util';

import { receiveErrors } from './session_actions';
import { activateTask } from './task_actions';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const ACTIVATE_PROJECT = 'ACTIVATE_PROJECT';

export const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects
});

export const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
});

export const activateProject = project => ({
  type: ACTIVATE_PROJECT,
  project
});

export const fetchProjects = teamId => dispatch => (
  ProjectApiUtil.fetchProjects(teamId)
    .then ( projects => dispatch(receiveProjects(projects)))
);

export const fetchProject = id => dispatch => (
  ProjectApiUtil.fetchProject(id)
  .then ( projectToPass => {
    dispatch(activateTask( {} ));
    return projectToPass;
    })
    .then ( project => dispatch(activateProject(project)))
);

export const fetchFilteredProject = id => dispatch => (
  ProjectApiUtil.fetchFilteredProject(id)
  .then( project => dispatch(activateProject(project)))
);

export const createProject = project => dispatch => (
  ProjectApiUtil.createProject(project)
    .then(savedProject => {
      dispatch(receiveProject(savedProject));
      dispatch(activateProject(savedProject));
      dispatch(receiveErrors([]));
    },
      err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const fetchUserTasks = teamId => dispatch => (
  TaskApiUtil.fetchUserTasks(teamId)
    .then( project => {
      dispatch(activateProject(project));
    })
);

export const fetchUnassignedTasks = teamId => dispatch => (
  TaskApiUtil.fetchUnassignedTasks(teamId)
    .then( project => {
      dispatch(activateProject(project));
    })
);

export const fetchFilteredUserTasks = teamId => dispatch => (
  TaskApiUtil.fetchFilteredUserTasks(teamId)
    .then( project => {
      dispatch(activateProject(project));
    })
);

export const fetchFilteredUnassignedTasks = teamId => dispatch => (
  TaskApiUtil.fetchFilteredUnassignedTasks(teamId)
    .then( project => {
      dispatch(activateProject(project));
    })
);
