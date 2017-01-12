import { connect } from 'react-redux';

import UserOptions from './user_options';
import { logout } from '../../../actions/session_actions';



const mapStateToProps = state => ({
  user: window.currentUser.username
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserOptions);
