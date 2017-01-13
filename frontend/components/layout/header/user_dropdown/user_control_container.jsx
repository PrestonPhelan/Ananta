import { connect } from 'react-redux';

import UserControl from './user_control';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});


export default connect(mapStateToProps)(UserControl);
