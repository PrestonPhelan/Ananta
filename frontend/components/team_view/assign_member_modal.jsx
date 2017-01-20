import React, { Component } from 'react';

import MemberSelectItem from '../team_select/member_select_item';

class AssignMemberModal extends Component {
  constructor(props) {
    super(props);
    this.state = { assignee_id: this.props.task.assignee ? this.props.task.assignee.id : null };
    this.toggleSelect = this.toggleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleSelect(user) {
    const prevAssignee = this.state.assignee_id;
    this.setState({ assignee_id: null});
    if (user && prevAssignee !== user.id) {
      this.setState({ assignee_id: user.id });
    }
    console.log(this.state.assignee_id);
  }

  handleSubmit() {
    this.props.updateTask({ id: this.props.task.id, assignee_id: this.state.assignee_id });
    this.props.hideModal();
  }

  render() {
    let userIcons =
     Object.values(this.props.members).map( user => {
      return (
        <MemberSelectItem
          key={user.id}
          user={user}
          onClick={this.toggleSelect}
          selected={this.state.assignee_id === user.id}
          type="assign"
        />);
    });

    const unassignedClass = this.state.assignee_id ? "unassigned-select-border" : "unassigned-selected-border";
    return (
      <div>
        <form id='member-assign-form' onSubmit={this.handleSubmit}>
          <div id='member-assign-header'> {`Assign Member to Task "${this.props.task.name}"`}</div>
          <div className='member-select-grid'>
            <div id='unassigned-select' className='default-select-item'>
              <div id={unassignedClass} onClick={() => this.toggleSelect(null)}>
                <i id='mem-assign-no-assignee' className="fa fa-user-o" aria-hidden="true"></i>
              </div>
              <div id='member-select-unassigned' className='member-select-username'>
                {"Unassigned"}
              </div>
            </div>
            {userIcons}
          </div>
          <input type="submit" className='submit-button' value={"Assign"} />
        </form>
      </div>
    );
  }
}

export default AssignMemberModal;
