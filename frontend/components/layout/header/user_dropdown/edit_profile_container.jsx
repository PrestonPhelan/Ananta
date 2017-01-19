import { connect } from 'react-redux';

import EditProfile from './edit_profile';
import { fetchUser, updateUser } from '../../../../actions/user_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  user: state.userDetail
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateUser: user => dispatch(updateUser(user)),
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
