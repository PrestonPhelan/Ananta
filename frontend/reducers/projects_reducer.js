import merge from 'lodash/merge';

import { RECEIVE_PROJECTS, RECEIVE_PROJECT, PROJECT_NAME } from '../actions/project_actions';

const ProjectsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROJECTS:
      return action.projects;
    case RECEIVE_PROJECT:
      return merge({}, state, { [action.project.id]: action.project});
    default:
      return state;
  }
};

export default ProjectsReducer;
