import { connect } from 'react-redux';

import TeamIndex from './team_index';
import { fetchTeams } from '../../actions/team_actions';

const mapStateToProps = state => ({
  teams: state.teams
});

const mapDispatchToProps = dispatch => ({
  fetchTeams: () => dispatch(fetchTeams())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamIndex);
