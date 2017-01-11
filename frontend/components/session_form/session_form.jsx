import React from 'react';
import merge from 'lodash/merge';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    debugger;
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
        .then(() => console.log("Successful Form Submission!"));
    };
  }

  render () {
    const usernameLabel = this.props.formType === "signup" ? "Username" : "Username or Email";
    const emailInput = this.props.formType === "signup" ? (
      <label>Email
        <input
          type="text"
          value={this.state.email}
          onChange={this.update('email')} />
      </label>
    ) : <div></div>;

    const passwordConfirm = this.props.formType === "signup" ? (
      <label>Confirm Password
        <input
          type="password"
          value={this.state.confirm_password}
          onChange={this.update('confirm_password')}
        />
      </label>
    ) : <div></div>;

    const text = this.props.formType === "signup" ? "Sign Up" : "Log In";

    return (
      <div>
        <h3>{text}</h3>
        <form onSubmit={this.handleSubmit(this.props.formType)}>
          {this.renderErrors()}
          <label>{usernameLabel}
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')} />
          </label>
          {emailInput}
          <label>Password
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
          </label>
          {passwordConfirm}

          <input type="submit" value={text} />
        </form>
      </div>
    );
  }
}

export default SessionForm;
