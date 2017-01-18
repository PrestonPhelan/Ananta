import { connect } from 'react-redux';

import TaskList from './task_list';
import { createTask } from '../../../actions/task_actions';

export const mapStateToProps = state => ({
  project: state.projectDetail,
  tasks: state.projectDetail.tasks,
  currentUser: state.session.currentUser
});

export const mapDispatchToProps = dispatch => ({
  createTask: task => dispatch(createTask(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
