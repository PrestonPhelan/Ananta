import { connect } from 'react-redux';

import TeamList from './team_list';


const mapStateToProps = state => ({
  teams: state.teams
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamList);
