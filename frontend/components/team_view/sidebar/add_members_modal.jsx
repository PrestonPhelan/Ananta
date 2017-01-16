import React, { Component } from 'react';
import merge from 'lodash/merge';

import MemberSelectItem from '../../team_select/member_select_item';

class AddMembersModal extends Component {
  constructor(props) {
    super(props);

    this.state = { membersToAdd: {} };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleSelect = this.toggleSelect.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  toggleSelect(user) {
    const currentMembers = merge({}, this.state.membersToAdd);
    if (Object.keys(this.state.membersToAdd).includes(user.id.toString())) {
      let newMembers = merge({}, currentMembers);
      delete newMembers[user.id];
      this.setState({ membersToAdd: newMembers});
    } else {
      const newMembers = merge({}, currentMembers, { [user.id]: user } );
      this.setState({membersToAdd: newMembers});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    Object.freeze(this.state);
  }

  render () {
    const currentIds = Object.values(this.props.currentMembers).map( member => member.id );

    const userIcons =
     Object.values(this.props.users)
     .filter( user => !currentIds.includes(parseInt(user.id)))
     .map( user => {
      return (
        <MemberSelectItem
          key={user.id}
          user={user}
          onClick={this.toggleSelect}/>);
    });

    return (
      <div>
        <form id='member-add-form' onSubmit={this.handleSubmit}>
          <div> {"Add Members"}</div>
          <span className='member-select-grid'>
            {userIcons}
          </span>
          <input type="submit" className='submit-button' value={"Add"} />
        </form>
      </div>
    );
  }
}

export default AddMembersModal;
