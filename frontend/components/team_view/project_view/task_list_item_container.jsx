import { connect } from 'react-redux';

import { fetchTask, updateTask } from '../../../actions/task_actions';
import TaskListItem from './task_list_item';

export const mapStateToProps = (state, ownProps) => ({
  task: ownProps.task
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  updateTask: task => dispatch(updateTask(task)),
  fetchTask: () => dispatch(fetchTask(ownProps.task.id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskListItem);
