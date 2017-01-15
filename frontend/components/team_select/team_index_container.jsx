import { connect } from 'react-redux';

import TeamIndex from './team_index';
import { fetchTeams } from '../../actions/team_actions';
import { receiveErrors } from '../../actions/session_actions';

const mapStateToProps = state => ({
  teams: state.teams
});

const mapDispatchToProps = dispatch => ({
  fetchTeams: () => dispatch(fetchTeams()),
  resetErrors: () => dispatch(receiveErrors([]))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamIndex);
