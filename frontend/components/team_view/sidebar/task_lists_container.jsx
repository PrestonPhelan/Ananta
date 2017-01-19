import { connect } from 'react-redux';

import TaskLists from './task_lists';
import { fetchUserTasks, fetchUnassignedTasks } from '../../../actions/project_actions';

const mapStateToProps = state => ({
  team: state.teamDetail
});

const mapDispatchToProps = dispatch => ({
  fetchUserTasks: teamId => dispatch(fetchUserTasks(teamId)),
  fetchUnassignedTasks: teamId => dispatch(fetchUnassignedTasks(teamId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskLists);
