import { connect } from 'react-redux';

import MemberList from './member_list';

const mapStateToProps = (state, ownProps) => ({
  members: ownProps.members
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MemberList);
