import React, { Component } from 'react';
import merge from 'lodash/merge';
import { hashHistory } from 'react-router';

import * as TeamApiUtil from '../../util/team_api_util';
import MemberSelectItem from './member_select_item';

class NewTeamForm extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "", membersToAdd: {} };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.toggleSelect = this.toggleSelect.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
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
    this.props.createTeam(returnState)
      .then(id => {
        hashHistory.push(`app/team/${id}`);
        this.props.hideModal();
      });
  }

  update(e) {
    this.setState( { name: e.target.value } );
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={idx}>
            {error}
          </li>
        ))}
      </ul>
    );
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
      <div className='new-team-form-box'>
        <div id="create-team-header"> {"Create Team"}</div>
        <form onSubmit={this.handleSubmit}>
          <div id="session-errors">
            {this.renderErrors()}
          </div>
          <input
            autoFocus
            type="text"
            className='form-input'
            value={this.state.name}
            onChange={this.update} />
          <div> {"Add Members"}</div>
          <div className='member-select-grid'>
            {userIcons}
          </div>
          <input type="submit" className='submit-button' value={"Create"} />
        </form>
      </div>
    );
  }
}

export default NewTeamForm;
