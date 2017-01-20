import { connect } from 'react-redux';

import TaskList from './task_list';
import { createTask } from '../../../actions/task_actions';
import { fetchFilteredProject, fetchProject } from '../../../actions/project_actions';

export const mapStateToProps = state => ({
  project: state.projectDetail,
  tasks: state.projectDetail.tasks,
  currentUser: state.session.currentUser
});

export const mapDispatchToProps = dispatch => ({
  createTask: task => dispatch(createTask(task)),
  fetchFilteredProject: id => dispatch(fetchFilteredProject(id)),
  fetchProject: id => dispatch(fetchProject(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
