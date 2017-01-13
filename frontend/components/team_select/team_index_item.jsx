import React from 'react';

import MemberListContainer from './member_list_container';

export default props => (
  <div>
    {props.team.name}
    <MemberListContainer />
  </div>
);
