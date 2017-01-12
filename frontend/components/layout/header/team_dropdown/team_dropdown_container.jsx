import { connect } from 'react-redux';

import TeamDropdown from './team_dropdown';

const mapStateToProps = (state, ownProps) => ({
  hidden: ownProps.hidden
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamDropdown);
