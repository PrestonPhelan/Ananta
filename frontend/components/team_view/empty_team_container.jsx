import { connect } from 'react-redux';

import { receiveErrors } from '../../actions/session_actions';
import EmptyTeamSplash from './empty_team_splash';
import { createProject } from '../../actions/team_actions';

export const mapStateToProps = state => ({
  errors: state.session.errors
});

export const mapDispatchToProps = dispatch => ({
  createProject: project => dispatch(createProject(project)),
  resetErrors: () => dispatch(receiveErrors([]))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmptyTeamSplash);
