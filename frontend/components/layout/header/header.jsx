import React from 'react';

import TeamControl from './team_dropdown/team_control';
import HeaderLogo from './header_logo';
import UserControlContainer from './user_dropdown/user_control_container';

export default () => (
  <div className='header'>
    <TeamControl />
    <HeaderLogo />
    <UserControlContainer />
  </div>
);
