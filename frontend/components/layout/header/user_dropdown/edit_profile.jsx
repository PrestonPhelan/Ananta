import React, { Component } from 'react';

class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.user;

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
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateUser(this.state);
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
