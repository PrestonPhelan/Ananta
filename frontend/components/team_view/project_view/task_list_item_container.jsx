import { connect } from 'react-redux';

import { fetchTask, updateTask } from '../../../actions/task_actions';
import { createTask, deleteTask } from '../../../actions/task_actions';
import DraggableTaskListItem from './task_list_item';

export const mapStateToProps = (state, ownProps) => ({
  task: ownProps.task,
  project: state.projectDetail,
  currentUser: state.session.currentUser
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  updateTask: task => dispatch(updateTask(task)),
  fetchTask: () => dispatch(fetchTask(ownProps.task.id)),
  createTask: task => dispatch(createTask(task)),
  createBlankTask: () => ownProps.createBlankTask(),
  deleteTask: id => dispatch(deleteTask(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DraggableTaskListItem);
