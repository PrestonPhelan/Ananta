import React, { Component } from 'react';

import TeamSummaryMemberList from './team_summary_member_list';

class MemberDetailModal extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.initialMember.id);
  }

  render() {
    return (
      <div id='member-detail-modal'>
        <div id='member-detail-select'>
          <TeamSummaryMemberList members={this.props.members} type={"in-modal"} fetchUser={this.props.fetchUser} />
        </div>
        <div id='member-detail-main'>{"User Img"} {this.props.member.username}</div>
        <div className='member-detail-item'>
          <div className='member-detail-label'>Role:</div>
          <div className='member-detail-content'>{this.props.member.role}</div>
        </div>
        <div className='member-detail-item'>
          <div className='member-detail-label'>Department:</div>
          <div className='member-detail-content'>{this.props.member.department}</div>
        </div>
        <div className='member-detail-item'>
          <div className='member-detail-label'>About:</div>
          <div className='member-detail-content'>{this.props.member.about}</div>
        </div>
      </div>
    );
  }
}

export default MemberDetailModal;
