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
    let image;
    if (this.props.member.image_url) {
      image = <img className='large-user-img' src={this.props.member.image_url} />;
    } else {
      image = <div className='large-default'><i className='fa fa-user-circle large-default' aria-hidden="true" /></div>;
    }

    return (
      <div id='member-detail-modal'>
        <div id='member-detail-select'>
          <TeamSummaryMemberList members={this.props.members} type={"in-modal"} fetchUser={this.props.fetchUser} />
        </div>
        <div id='member-detail-main'> <div>{image}</div> <div id='member-detail-username'>{this.props.member.username}</div> </div>
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
          <div className='member-detail-content member-detail-about'>{this.props.member.about}</div>
        </div>
      </div>
    );
  }
}

export default MemberDetailModal;
