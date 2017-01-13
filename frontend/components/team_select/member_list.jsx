import React, { Component } from 'react';

import MemberListItem from './member_list_item';

class MemberList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const memberListItems =
      (this.props.members).map(
        member => (
          <div>{member.id}
          <MemberListItem memberImage={member.image_url} />
          </div>
        )
      );

    return (
      <div>
        {"Members go here!"}
        {memberListItems}
      </div>
    );
  }
}

export default MemberList;
