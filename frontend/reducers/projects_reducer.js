import merge from 'lodash/merge';

import {
  RECEIVE_PROJECTS,
  RECEIVE_PROJECT,
  ACTIVATE_PROJECT } from '../actions/project_actions';

const ProjectDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROJECTS:
      return action.projects;
    case RECEIVE_PROJECT:
      return merge({}, state, { [action.project.id]: action.project});
    case ACTIVATE_PROJECT:
      return action.project;
    default:
      return state;
  }
};

export default ProjectDetailReducer;
