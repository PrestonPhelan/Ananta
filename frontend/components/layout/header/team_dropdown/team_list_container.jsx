import { connect } from 'react-redux';

import TeamList from './team_list';
import { fetchTeams } from '../../../../actions/team_actions';
import { receiveErrors } from '../../../../actions/session_actions';


const mapStateToProps = (state, ownProps) => ({
  teams: state.teams,
  modal: ownProps.modal
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTeams: () => dispatch(fetchTeams()),
  resetErrors: () => dispatch(receiveErrors([])),
  clearDropdown: () => ownProps.clearDropdown()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamList);
