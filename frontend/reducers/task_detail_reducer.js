import { ACTIVATE_TASK } from '../actions/task_actions';

const TaskDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case ACTIVATE_TASK:
      return action.task;
    default:
      return state;
  }
};

export default TaskDetailReducer;
