import React, { Component } from 'react';
import merge from 'lodash/merge';

class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      role: this.props.user.role || "",
      department: this.props.user.department || "",
      about: this.props.user.about || ""
    };

    console.log(this.state);
    console.log(this.state.role);
    console.log(this.state.department);
    console.log(this.state.about);

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props !== newProps) {
      this.setState(newProps.user);
    }
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
      console.log(this.state);
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const newState = merge({}, this.state, { id: this.props.user.id });
    this.props.updateUser(this.state)
      .then( () => this.props.hideModal());
  }

  render() {
    return (
      <div className='session-modal'>
        <h3>{"Edit Profile"}</h3>
        <form onSubmit={this.handleSubmit}>
          <div id='edit-profile-form' className='session-form'>
            <label>{"Role"}
            <input
              className='form-input'
              type="text"
              value={this.state.role}
              onChange={this.update('role')} />
            </label>
            <label>{"Department"}
              <input
                type="text"
                className='form-input'
                value={this.state.department}
                onChange={this.update('department')} />
            </label>
            <label>{"About"}
              <textarea
                className='form-input'
                value={this.state.about}
                onChange={this.update('about')} />
            </label>
          </div>
          <input type="submit" value={"Update"} className='submit-button'/>
        </form>
      </div>
    );
  }
}

export default EditProfile;
