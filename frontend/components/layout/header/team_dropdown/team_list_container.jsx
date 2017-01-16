import { connect } from 'react-redux';

import TeamList from './team_list';
import { fetchTeams } from '../../../../actions/team_actions';
import { receiveErrors } from '../../../../actions/session_actions';


const mapStateToProps = (state, ownProps) => ({
  teams: state.teams,
  modal: ownProps.modal
});

const mapDispatchToProps = dispatch => ({
  fetchTeams: () => dispatch(fetchTeams()),
  resetErrors: () => dispatch(receiveErrors([]))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamList);
