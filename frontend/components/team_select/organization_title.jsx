import React from 'react';

export default props => (
  <div className='team-select-header'>
    <div className='team-select-org-header'>{props.username}{"'s Teams"}</div>
    <button className='all-tasks-button'>{"All My Tasks"}</button>
  </div>
);
