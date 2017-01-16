import React, { Component } from 'react';
import merge from 'lodash/merge';

class CreateProjectModal extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(e) {
    this.setState( { name: e.target.value } );
  }

  handleSubmit(e) {
    e.preventDefault();
    const returnState = merge({}, this.state, { team_id: this.props.teamId} );
    this.props.createProject(returnState)
      .then(() => this.props.hideModal());
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
    return (
      <form className='new-project-form' onSubmit={this.handleSubmit}>
        <h3>{"CREATE PROJECT"}</h3>
        {this.renderErrors()}
        <input
          autoFocus
          className='form-input'
          type="text"
          value={this.state.name}
          onChange={this.update}/>
        <br />
        <input
          className='submit-button'
          type="submit"
          value={"Create"} />
      </form>
    );
  }
}

export default CreateProjectModal;
