import { connect } from 'react-redux';

import AddMembersModal from'./add_members_modal';
import { fetchUsers } from '../../../actions/user_actions';

const mapStateToProps = state => ({
  users: state.users,
  currentMembers: state.teamDetail.members
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMembersModal);
