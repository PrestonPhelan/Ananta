export const fetchTasks = projectId => (
  $.ajax({
    method: 'GET',
    url: `api/projects/${projectId}/tasks`
  })
);

export const createTask = task => {
  return $.ajax({
    method: 'POST',
    url: `api/tasks`,
    data: { task }
  });
};

export const updateTask = task => {
  return $.ajax({
    method: 'PATCH',
    url: `api/tasks/${task.id}`,
    data: { task }
  });
};
