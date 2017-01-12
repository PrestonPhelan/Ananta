import { connect } from 'react-redux';

import { demoLogin } from '../../actions/session_actions';
import SplashForm from './splash_form';

const mapDispatchToProps = dispatch => ({
  demoLogin: () => dispatch(demoLogin())
});

export default connect(
  null,
  mapDispatchToProps
)(SplashForm);
