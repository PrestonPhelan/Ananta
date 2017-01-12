import { connect } from 'react-redux';

import UserOptions from './user_options';



const mapStateToProps = state => ({
  user: window.currentUser.username
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserOptions);
