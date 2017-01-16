import { connect } from 'react-redux';

import AddMembersModal from'./add_members_modal';
import { fetchUsers } from '../../../actions/user_actions';
import { addMembers } from '../../../actions/team_actions';

const mapStateToProps = (state, ownProps) => ({
  users: state.users,
  currentMembers: state.teamDetail.members,
  hideModal: ownProps.hideModal,
  team: state.teamDetail
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  addMembers: (members, memberId, teamId) => dispatch(addMembers(members, memberId, teamId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMembersModal);
