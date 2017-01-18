import { connect } from 'react-redux';

import { updateTask } from '../../actions/task_actions';
import AssignMemberModal from './assign_member_modal';

export const mapStateToProps = (state, ownProps) => ({
  task: ownProps.task,
  members: state.teamDetail.members,
  hideModal: ownProps.hideModal
});

export const mapDispatchToProps = dispatch => ({
  updateTask: task => dispatch(updateTask(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssignMemberModal);
