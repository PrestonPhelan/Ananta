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

export const addMember = (member, memberId, teamId) => {
  return $.ajax({
    method: 'POST',
    url: `api/memberships`,
    data: { membership: { team_id: teamId, user_id: memberId, member }}
  });
};
