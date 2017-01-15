import React, { Component } from 'react';

import MemberListItem from './member_list_item';

class MemberList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const memberListItems =
      (this.props.members).map(
        member => (
          <MemberListItem memberImage={member.image_url} key={member.id}/>
        )
      );

    return (
      <div className='member-list'>
        {memberListItems}
      </div>
    );
  }
}

export default MemberList;
