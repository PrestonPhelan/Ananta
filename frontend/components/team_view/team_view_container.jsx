import { connect } from 'react-redux';

import { fetchTeam } from '../../actions/team_actions';
import TeamView from './team_view';

export const mapStateToProps = state => ({
  team: state.teamDetail
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTeam: () => dispatch(fetchTeam(ownProps.params.teamId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamView);
