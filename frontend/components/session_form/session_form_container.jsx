import React from 'react';
import { connect } from 'react-redux';

import { login, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,
  formType: ownProps.params.type
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.params.type === "login" ? login : signup;
  return ({
    action: user => dispatch(action(user))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
