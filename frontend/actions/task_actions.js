import * as TaskApiUtil from '../util/task_api_util';

export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const ACTIVATE_TASK = 'ACTIVATE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export const receiveTasks = tasks => ({
  type: RECEIVE_TASKS,
  tasks
});

export const receiveTask = task => ({
  type: RECEIVE_TASK,
  task
});

export const activateTask = task => ({
  type: ACTIVATE_TASK,
  task
});

export const removeTask = id => ({
  type: REMOVE_TASK,
  id
});

export const fetchTasks = projectId => dispatch => (
  TaskApiUtil.fetchTasks(projectId)
    .then ( tasks => dispatch(receiveTasks(tasks)))
);

export const fetchTask = id => dispatch => (
  TaskApiUtil.fetchTask(id)
    .then( task => {
      dispatch(activateTask(task));
      return task;
    })
);

export const createTask = task => dispatch => (
  TaskApiUtil.createTask(task)
    .then(savedTask => {
      dispatch(receiveTask(savedTask));
      return savedTask;
    }, err => console.log(err.responseJSON)
  )
);

export const updateTask = task => dispatch => {
  return TaskApiUtil.updateTask(task)
    .then(savedTask => {
      dispatch(receiveTask(savedTask));
      return savedTask;
    }, err => console.log(err.responseJSON));
};

export const deleteTask = id => dispatch => {
  return TaskApiUtil.deleteTask(id)
    .then( () => {
      dispatch(activateTask({}));
      dispatch(removeTask(id));
    });
};
