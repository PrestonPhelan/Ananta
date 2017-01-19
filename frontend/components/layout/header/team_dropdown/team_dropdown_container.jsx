import { connect } from 'react-redux';

import TeamDropdown from './team_dropdown';

const mapStateToProps = (state, ownProps) => ({
  hidden: ownProps.hidden,
  modal: ownProps.modal
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  clearDropdown: () => ownProps.clearDropdown()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamDropdown);
