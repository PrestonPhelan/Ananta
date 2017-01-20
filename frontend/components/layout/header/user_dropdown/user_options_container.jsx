import { connect } from 'react-redux';

import UserOptions from './user_options';
import { logout } from '../../../../actions/session_actions';



const mapStateToProps = (state, ownProps) => ({
  user: state.session.currentUser,
  modal: ownProps.modal
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  clearDropdown: () => ownProps.clearDropdown(),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserOptions);
