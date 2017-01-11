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
        .then(() => hashHistory.push('/'));
    };
  }

  render () {
    const usernameLabel = this.props.formType === "signup" ? "Username" : "Username or Email";
    const emailInput = this.props.formType === "signup" ? (
      <div>
      <label>Email
        <input
          type="text"
          value={this.state.email}
          onChange={this.update('email')} />
      </label><br /></div>
    ) : <div></div>;

    const passwordConfirm = this.props.formType === "signup" ? (
      <div>
      <label>Confirm Password
        <input
          type="password"
          value={this.state.confirm_password}
          onChange={this.update('confirm_password')}
        />
      </label><br /></div>
    ) : <div></div>;

    const text = this.props.formType === "signup" ? "SIGN UP" : "LOG IN";

    return (
      <div>
        <h3>{text}</h3>
        <button
          className='session-button demo-button'
          onClick={() => console.log("This will log in guest account!")}>
          DEMO
        </button>
        <form className="session-form" onSubmit={this.handleSubmit(this.props.formType)}>
          {this.renderErrors()}
          <label>{usernameLabel}
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')} />
          </label><br />
          {emailInput}
          <label>Password
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
          </label><br />
          {passwordConfirm}

          <input className='session-button' type="submit" value={text} />
        </form>
      </div>
    );
  }
}

export default SessionForm;
