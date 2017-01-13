import React, { Component } from 'react';

class NewTeamForm extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit() {

  }

  update(e) {
    this.setState( { name: e.target.value } );
  }

  render() {
    return (
      <div>
        <div> {"Create Team"}</div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" className='form-input' value={this.state.name} onChange={this.update} />
          <input type="submit" className='submit-button' value={"Create"} />
        </form>
      </div>
    );
  }
}

export default NewTeamForm;
