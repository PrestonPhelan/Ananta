import React, { Component } from 'react';
import { hashHistory } from 'react-router';

export default props => (
  <li
    className='option'
    onClick={() => {
      hashHistory.push(`/app/team/${props.team.id}`);
      props.clearDropdown();
    }}>
    {props.team.name}
  </li>
);
