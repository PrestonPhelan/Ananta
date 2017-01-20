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
    this.props.addMembers(this.state.membersToAdd, this.props.team.id);
    this.props.hideModal();
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

    let gridSpace;

    if (userIcons.length === 0) {
      gridSpace = <div id='no-member-message'>No members to add</div>;
    } else {
      gridSpace = userIcons;
    }


    return (
      <div>
        <form id='member-add-form' onSubmit={this.handleSubmit}>
          <div id='member-add-header'> {"Add Members"}</div>
          <div className='member-select-grid'>
            {gridSpace}
          </div>
          <input type="submit" className='submit-button' value={"Add"} />
        </form>
      </div>
    );
  }
}

export default AddMembersModal;
