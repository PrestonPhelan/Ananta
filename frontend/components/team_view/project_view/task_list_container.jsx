import { connect } from 'react-redux';

import TaskList from './task_list';

export const mapStateToProps = state => ({
  tasks: state.projectDetail.tasks
});

export const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
