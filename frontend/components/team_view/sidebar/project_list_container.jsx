import { connect } from 'react-redux';

import ProjectList from './project_list';
import { receiveErrors } from '../../../actions/session_actions';

const mapStateToProps = state  => ({
  projects: state.teamDetail.projects
});

const mapDispatchToProps = dispatch => ({
  resetErrors: () => dispatch(receiveErrors([]))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectList);
