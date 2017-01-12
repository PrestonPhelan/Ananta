import { connect } from 'react-redux';

import { login, demoLogin } from '../../actions/session_actions';
import SplashButtons from './splash_buttons';

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  demoLogin: () => dispatch(demoLogin())
});

export default connect(
  null,
  mapDispatchToProps
)(SplashButtons);
