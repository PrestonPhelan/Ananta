import React, { Component } from 'react';

import TeamSummaryMemberList from './team_summary_member_list';

class MemberDetailModal extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.initialMember.id);
  }

  componentWillReceiveProps(newProps) {
    if(this.props !== newProps) {
      this.props.fetchUser(newProps.member.id);
    }
  }

  render() {
    return (
      <div>
        <TeamSummaryMemberList members={this.props.members} />
        <div>{"User Img"} {this.props.member.username}</div>
        <div>{this.props.member.role}</div>
        <div>{this.props.member.department}</div>
        <div>{this.props.member.about}</div>
      </div>
    );
  }
}

export default MemberDetailModal;
