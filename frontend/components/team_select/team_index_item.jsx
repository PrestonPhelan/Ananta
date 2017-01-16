import React from 'react';
import { hashHistory } from 'react-router';

import MemberListContainer from './member_list_container';

export default props => (
  <div className='team-index-item' onClick={() => hashHistory.push(`/app/team/${props.team.id}`)}>
    {props.team.name}
    <MemberListContainer members={props.team.members} />
  </div>
);
