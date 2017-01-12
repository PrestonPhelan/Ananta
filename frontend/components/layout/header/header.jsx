import React from 'react';

import TeamControl from './team_dropdown/team_control';
import HeaderLogo from './header_logo';
import UserControl from './user_dropdown/user_control';

export default () => (
  <div className='header'>
    <TeamControl />
    <HeaderLogo />
    <UserControl />
  </div>
);
