export const fetchTeams = () => {
  return $.ajax({
    method: 'GET',
    url: `api/teams`
  });
};

export const createTeam = team => {
  return $.ajax({
    method: 'POST',
    url: `api/teams`,
    data: team
  });
};
