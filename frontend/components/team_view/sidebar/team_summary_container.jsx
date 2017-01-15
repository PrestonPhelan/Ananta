import { connect } from 'react-redux';

import TeamSummary from './team_summary';

const mapStateToProps = state => ({
  name: state.teamDetail.name,
  members: state.teamDetail.members
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamSummary);
