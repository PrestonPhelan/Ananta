import { connect } from 'react-redux';

import { fetchTeam } from '../../actions/team_actions';
import { fetchProject } from '../../actions/project_actions';
import TeamView from './team_view';

export const mapStateToProps = state => ({
  team: state.teamDetail,
  currentUser: state.session.currentUser
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTeam: () => dispatch(fetchTeam(ownProps.params.teamId)),
  fetchProject: id => dispatch(fetchProject(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamView);
