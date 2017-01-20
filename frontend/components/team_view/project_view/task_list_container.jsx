import { connect } from 'react-redux';

import TaskList from './task_list';
import { createTask } from '../../../actions/task_actions';
import {
  fetchFilteredProject,
  fetchProject,
  fetchFilteredUserTasks,
  fetchFilteredUnassignedTasks,
  fetchUserTasks,
  fetchUnassignedTasks } from '../../../actions/project_actions';

export const mapStateToProps = state => ({
  project: state.projectDetail,
  tasks: state.projectDetail.tasks,
  currentUser: state.session.currentUser,
  team: state.teamDetail
});

export const mapDispatchToProps = dispatch => ({
  createTask: task => dispatch(createTask(task)),
  fetchFilteredProject: id => dispatch(fetchFilteredProject(id)),
  fetchProject: id => dispatch(fetchProject(id)),
  fetchFilteredUserTasks: teamId => dispatch(fetchFilteredUserTasks(teamId)),
  fetchFilteredUnassignedTasks: teamId => dispatch(fetchFilteredUnassignedTasks(teamId)),
  fetchUserTasks: teamId => dispatch(fetchUserTasks(teamId)),
  fetchUnassignedTasks: teamId => dispatch(fetchUnassignedTasks(teamId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
