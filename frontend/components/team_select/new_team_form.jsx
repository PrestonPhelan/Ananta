import React, { Component } from 'react';
import merge from 'lodash/merge';

import * as TeamApiUtil from '../../util/team_api_util';
import MemberSelectItem from './member_select_item';

class NewTeamForm extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "", membersToAdd: {} };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
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
    let returnState = merge(
      {},
      this.state,
      { owner_id: this.props.currentUser.id, organization_id: 1 }
    );
    let returnMembers = merge(
      {},
      this.state.membersToAdd,
      { [this.props.currentUser.id]: this.props.currentUser});
    returnState.membersToAdd = returnMembers;
    this.props.createTeam(returnState);
  }

  update(e) {
    this.setState( { name: e.target.value } );
  }

  render() {
    const userIcons =
     Object.values(this.props.users)
     .filter( user => user.username !== this.props.currentUser.username)
     .map( user => {
      return (
        <MemberSelectItem
          key={user.id}
          user={user}
          onClick={this.toggleSelect}/>);
    }
    );

    return (
      <div>
        <div> {"Create Team"}</div>
        <div> {"Selected"} {Object.keys(this.state.membersToAdd)}</div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className='form-input'
            value={this.state.name}
            onChange={this.update} />
          <span className='member-select-grid'>
            {userIcons}
          </span>
          <input type="submit" className='submit-button' value={"Create"} />
        </form>
      </div>
    );
  }
}

export default NewTeamForm;
