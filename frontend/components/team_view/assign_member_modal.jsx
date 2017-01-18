import React, { Component } from 'react';

import MemberSelectItem from '../team_select/member_select_item';

class AssignMemberModal extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.task);
    this.state = { assignee_id: this.props.task.assignee ? this.props.task.assignee.id : null };
    this.toggleSelect = this.toggleSelect.bind(this);
  }

  toggleSelect(user) {
    if (user) {
      this.setState = { assignee_id: user.id };
    } else {
      this.setState = { assignee_id: null };
    }
  }

  render() {
    console.log(this.state.assignee_id);
    const userIcons =
     Object.values(this.props.members).map( user => {
      return (
        <MemberSelectItem
          key={user.id}
          user={user}
          onClick={this.toggleSelect}
          selected={this.state.assignee_id === user.id}
        />);
    });

    const unassignedClass = this.state.assignee_id ? "unassigned-select-border" : "unassigned-selected-border";
    console.log(this.state.assignee_id);
    console.log(unassignedClass);
    return (
      <div>
        <form id='member-assign-form'>
          <div id='member-assign-header'> {`Assign Member to Task "${this.props.task.name}"`}</div>
          <span className='member-select-grid'>
            <div id='unassigned-select' className='default-select-item'>
              <div id={unassignedClass} onClick={this.toggleSelect(null)}>
                <i id='unassigned-img' className="fa fa-user-o" aria-hidden="true"></i>
                <div className='member-select-username'>
                  {"Unassigned"}
                </div>
              </div>
            </div>
            {userIcons}
          </span>
          <input type="submit" className='submit-button' value={"Assign"} />
        </form>
      </div>
    );
  }
}

export default AssignMemberModal;
