export const fetchProjects = teamId => (
  $.ajax({
    method: 'GET',
    url: `api/teams/${teamId}/projects`
  })
);

export const createProject = project => {
  return $.ajax({
    method: 'POST',
    url: `api/projects`,
    data: { project }
  });
};
