import React, { Component } from 'react';

import MemberSelectItem from '../team_select/member_select_item';

class AssignMemberModal extends Component {
  constructor(props) {
    super(props);

    this.state = { assignee_id: "" };
  }

  render() {
    const userIcons =
     Object.values(this.props.members).map( user => {
      return (
        <MemberSelectItem
          key={user.id}
          user={user}
          onClick={() => console.log("Hi!")}
        />);
    });
    return (
      <div>
        <form id='member-assign-form'>
          <div id='member-assign-header'> {`Assign Member to Task "${this.props.task.name}"`}</div>
          <span className='member-select-grid'>
            <div className='default-select-item'>
              <i className="fa fa-user-o" aria-hidden="true"></i>
              <span className='member-select-username'>
                {"Unassigned"}
              </span>
              {userIcons}
            </div>
          </span>
          <input type="submit" className='submit-button' value={"Assign"} />
        </form>
      </div>
    );
  }
}

export default AssignMemberModal;
