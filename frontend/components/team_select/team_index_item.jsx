import React from 'react';

import MemberListContainer from './member_list_container';

export default props => (
  <div className='team-index-item'>
    {props.team.name}
    <MemberListContainer members={props.team.members} />
  </div>
);
