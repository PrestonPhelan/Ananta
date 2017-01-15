export const fetchProjects = teamId => (
  $.ajax({
    method: 'GET',
    path: `api/teams/${teamId}/projects`
  })
);

export const createProject = project => (
  $.ajax({
    method: 'POST',
    path: 'api/projects',
    data: project
  })
);
