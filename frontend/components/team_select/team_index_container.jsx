import { connect } from 'react-redux';

import TeamIndex from './team_index';

const mapStateToProps = state => ({
  teams: state.teams
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamIndex);
