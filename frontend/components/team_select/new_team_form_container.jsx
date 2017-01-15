import { connect } from 'react-redux';

import NewTeamForm from './new_team_form';
import { fetchUsers } from '../../actions/user_actions';
import { createTeam } from '../../actions/team_actions';

const mapStateToProps = state => ({
  users: state.users,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  createTeam: team => dispatch(createTeam(team))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTeamForm);
