import { connect } from 'react-redux';

import UserOptions from './user_options';
import { logout } from '../../../../actions/session_actions';



const mapStateToProps = state => {
  let username;

  console.log("In mapStateToProps!");
  if (state.session.currentUser.username) {
    console.log(`${state.session.currentUser}`);
    username = state.session.currentUser.username;
  }

  return {
    user: state.session.currentUser.username
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserOptions);
