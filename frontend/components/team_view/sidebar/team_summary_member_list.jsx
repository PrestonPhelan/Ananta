import React from 'react';

import TeamSummaryMemberListItem from './team_summary_member_list_item';

export default ({ members }) => {
  const memberListItems = Object.values(members).map(
    member => <TeamSummaryMemberListItem member={member} key={member.id} />
  );
  return (
    <span>
      {memberListItems}
      {"+"}
    </span>
  );
};
