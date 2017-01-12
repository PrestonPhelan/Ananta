import { connect } from 'react-redux';

import { login, demoLogin, receiveErrors } from '../../actions/session_actions';
import SplashButtons from './splash_buttons';

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  resetErrors: () => dispatch(receiveErrors([])),
  demoLogin: () => dispatch(demoLogin())
});

export default connect(
  null,
  mapDispatchToProps
)(SplashButtons);
