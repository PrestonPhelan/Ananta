import React, { Component } from 'react';
import Modal from 'boron/ScaleModal';

import MemberDetailModalContainer from './member_detail_modal_container';

class TeamSummaryMemberListItem extends Component {
  constructor(props) {
    super(props);

    this.showModal = this.showModal.bind(this);
    this.hide = this.hide.bind(this);
    this.clickAction = this.clickAction.bind(this);
  }

  showModal() {
      this.refs.memberDetail.show();
  }

  hide() {
    this.refs.memberDetail.hide();
  }

  clickAction() {
    if(this.props.type === "in-modal") {
      this.props.fetchUser(this.props.member.id);
    } else {
      this.showModal();
    }
  }

  render() {
    let image;
    if (this.props.member.image_url) {
      image = <img className='small-user-img' src={this.props.member.image_url} />;
    } else {
      image = <i className={`fa fa-user-circle`} aria-hidden="true" />;
    }

    return (
      <div className='ts-member-list-item' onClick={this.clickAction}>
        {image}

        <Modal ref="memberDetail">
          <button className='close-modal' onClick={this.hide}>X</button>
          <MemberDetailModalContainer member={this.props.member}/>
        </Modal>
      </div>
    );
  }
}

export default TeamSummaryMemberListItem;
