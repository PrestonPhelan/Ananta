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
      <div>
        <h3>{"Edit Profile"}</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Role"
            value={this.state.role}
            onChange={this.update('role')} />
            <input
              type="text"
              placeholder="Department"
              value={this.state.department}
              onChange={this.update('department')} />
            <textarea
              placeholder="About Me"
              value={this.state.about}
              onChange={this.update('about')} />
            <input type="submit" value={"Update"} />
        </form>
      </div>
    );
  }
}

export default EditProfile;
