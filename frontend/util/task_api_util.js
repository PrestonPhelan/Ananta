export const fetchTasks = projectId => (
  $.ajax({
    method: 'GET',
    url: `api/projects/${projectId}/tasks`
  })
);

export const fetchTask = id => (
  $.ajax({
    method: 'GET',
    url: `api/tasks/${id}`
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

export const fetchFilteredUserTasks = teamId => {
  return $.ajax({
    method: 'GET',
    url: `api/teams/${teamId}/tasks`,
    data: { type: "USER-FILTERED" }
  });
};

export const fetchFilteredUnassignedTasks = teamId => {
  return $.ajax({
    method: 'GET',
    url: `api/teams/${teamId}/tasks`,
    data: { type: "UNASSIGNED-FILTERED" }
  });
};

export const fetchUserTasks = teamId => {
  return $.ajax({
    method: 'GET',
    url: `api/teams/${teamId}/tasks`,
    data: { type: "USER" }
  });
};

export const fetchUnassignedTasks = teamId => {
  return $.ajax({
    method: 'GET',
    url: `api/teams/${teamId}/tasks`,
    data: { type: "UNASSIGNED" }
  });
};

export const deleteTask = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/tasks/${id}`
  });
};
