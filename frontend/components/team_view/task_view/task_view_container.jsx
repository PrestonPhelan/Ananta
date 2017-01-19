import { connect } from 'react-redux';

import TaskView from './task_view';

export const mapStateToProps = state => ({
  task: state.taskDetail
});

export const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskView);
