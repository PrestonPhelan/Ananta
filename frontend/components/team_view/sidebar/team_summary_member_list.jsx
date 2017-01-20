import React, { Component } from 'react';
import Modal from 'boron/ScaleModal';

import TeamSummaryMemberListItem from './team_summary_member_list_item';
import AddMembersModalContainer from './add_members_modal_container';

class TeamSummaryMemberList extends Component {
  constructor(props) {
    super(props);

    this.showModal = this.showModal.bind(this);
    this.hide = this.hide.bind(this);
  }

  showModal() {
      this.refs.addMemberModal.show();
  }

  hide() {
    this.refs.addMemberModal.hide();
  }

  render() {
    const memberListItems = Object.values(this.props.members).map(
      member => <TeamSummaryMemberListItem member={member} key={member.id} type={this.props.type} fetchUser={this.props.fetchUser}/>
    );
    return (
      <div>
        <div id='team-summary-members'>
          {memberListItems}
          <i
            id='ts-add-member'
            className="fa fa-user-plus"
            aria-hidden="true"
            onClick={this.showModal}></i>
        </div>

        <Modal ref="addMemberModal">
          <button className='close-modal' onClick={this.hide}>X</button>
          <AddMembersModalContainer hideModal={this.hide}/>
        </Modal>
      </div>
    );
  }
}


export default TeamSummaryMemberList;
