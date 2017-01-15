export const fetchTeams = () => {
  return $.ajax({
    method: 'GET',
    url: `api/teams`
  });
};

export const fetchTeam = id => {
  return $.ajax({
    method: 'GET',
    url: `api/teams/${id}`
  });
};

export const createTeam = team => {
  return $.ajax({
    method: 'POST',
    url: `api/teams`,
    data: { team }
  });
};

export const addMember = (member_id, team_id) => {
  return $.ajax({
    method: 'POST',
    url: `api/memberships`,
    data: { team_id: team_id, user_id: member_id }
  });
};
