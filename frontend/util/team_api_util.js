export const fetchUserTeams = user => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${user.id}/teams`
  });
};
