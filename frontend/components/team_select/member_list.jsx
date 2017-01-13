import React, { Component } from 'react';

import MemberListItem from './member_list_item';

class MemberList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {"Members go here!"}
        <MemberListItem />
      </div>
    );
  }
}

export default MemberList;
