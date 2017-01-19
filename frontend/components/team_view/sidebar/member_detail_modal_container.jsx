import { connect } from 'react-redux';

import MemberDetailModal from './member_detail_modal';
import { fetchUser } from '../../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
  members: state.teamDetail.members,
  member: state.userDetail,
  initialMember: ownProps.member
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberDetailModal);
