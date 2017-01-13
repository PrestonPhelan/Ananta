import { connect } from 'react-redux';

import OrganizationTitle from './organization_title';

const mapStateToProps = state => ({
  username: state.session.currentUser.username
});

export default connect(mapStateToProps)(OrganizationTitle);
