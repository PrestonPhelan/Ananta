import { connect } from 'react-redux';

import ProjectList from './project_list';
import { receiveErrors } from '../../../actions/session_actions';
import { fetchProject } from '../../../actions/project_actions';

const mapStateToProps = state  => ({
  projects: state.teamDetail.projects,
  activeProject: state.projectDetail
});

const mapDispatchToProps = dispatch => ({
  resetErrors: () => dispatch(receiveErrors([])),
  fetchProject: id => dispatch(fetchProject(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectList);
