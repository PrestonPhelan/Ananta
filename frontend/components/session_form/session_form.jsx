import React from 'react';
import merge from 'lodash/merge';
import { hashHistory } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        email: "",
        password: "",
        confirm_password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
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

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(type){
    return e => {
      e.preventDefault();
      Object.freeze(this.state);

      const user = merge({}, this.state);

      if (type === "login") {
        delete user.email;
        delete user.confirm_password;
      }

      //TODO Give this a proper callback
      this.props.action(user)
        .then(() => hashHistory.push('/test '));
    };
  }

  render () {
    const usernameLabel = this.props.formType === "signup" ? "Username" : "Username or Email";
    const emailInput = this.props.formType === "signup" ? (
      <div>
      <label>Email
        <input
          className='session-input'
          type="text"
          value={this.state.email}
          onChange={this.update('email')} />
      </label><br /></div>
    ) : <div></div>;

    const passwordConfirm = this.props.formType === "signup" ? (
      <div>
      <label>Confirm Password
        <input
          className='session-input'
          type="password"
          value={this.state.confirm_password}
          onChange={this.update('confirm_password')}
        />
      </label><br /></div>
    ) : <div></div>;

    const text = this.props.formType === "signup" ? "SIGN UP" : "LOG IN";

    return (
      <div>
        <form onSubmit={this.handleSubmit(this.props.formType)}>
          <div id="session-errors">
            {this.renderErrors()}
          </div>
          <div className="session-form">
            <label>{usernameLabel}
              <input
                className='session-input'
                type="text"
                value={this.state.username}
                onChange={this.update('username')} />
            </label><br />
            {emailInput}
            <label>Password
              <input
                className='session-input'
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
              />
            </label><br />
            {passwordConfirm}
          </div>

          <input className='session-button' type="submit" value={text} />
        </form>
      </div>
    );
  }
}

export default SessionForm;
