export const fetchProjects = teamId => (
  $.ajax({
    method: 'GET',
    url: `api/teams/${teamId}/projects`
  })
);

export const fetchProject = projectId => (
  $.ajax({
    method: 'GET',
    url: `api/projects/${projectId}`
  })
);

export const createProject = project => {
  return $.ajax({
    method: 'POST',
    url: `api/projects`,
    data: { project }
  });
};
