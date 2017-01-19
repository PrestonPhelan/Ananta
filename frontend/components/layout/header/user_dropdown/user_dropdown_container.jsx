import { connect } from 'react-redux';

import UserDropdown from './user_dropdown';

const mapStateToProps = (state, ownProps) => ({
  hidden: ownProps.hidden,
  modal: ownProps.modal
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDropdown);
