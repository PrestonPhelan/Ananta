import * as TaskApiUtil from '../util/task_api_util';

export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';

export const receiveTasks = tasks => ({
  type: RECEIVE_TASKS,
  tasks
});

export const receiveTask = task => ({
  type: RECEIVE_TASK,
  task
});

export const fetchTasks = projectId => dispatch => (
  TaskApiUtil.fetchTasks(projectId)
    .then ( tasks => dispatch(receiveTasks(tasks)))
);

export const createTask = task => dispatch => (
  TaskApiUtil.createTask(task)
    .then(savedTask => {
      dispatch(receiveTask(savedTask));
    }, err => console.log(err.responseJSON)
  )
);
