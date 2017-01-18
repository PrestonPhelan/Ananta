import merge from 'lodash/merge';

import {
  RECEIVE_PROJECTS,
  RECEIVE_PROJECT,
  ACTIVATE_PROJECT } from '../actions/project_actions';
import { RECEIVE_TASK } from '../actions/task_actions';

const ProjectDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROJECTS:
      return action.projects;
    case RECEIVE_PROJECT:
      return merge({}, state, { [action.project.id]: action.project});
    case ACTIVATE_PROJECT:
      return action.project;
    case RECEIVE_TASK:
      console.log(action.task);
      const oldTasks = state.tasks;
      const newTasks = oldTasks.concat([{[action.task.id]: action.task}]);
      return merge({}, state, { tasks: newTasks });
    default:
      return state;
  }
};

export default ProjectDetailReducer;
