import { connect } from 'react-redux';

import { updateTask } from '../../../actions/task_actions';
import TaskView from './task_view';

export const mapStateToProps = state => ({
  task: state.taskDetail
});

export const mapDispatchToProps = dispatch => ({
  updateTask: task => dispatch(updateTask(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskView);
