import { connect } from 'react-redux';

import { fetchProject } from '../../../actions/team_actions';
import ProjectView from './project_view';

export const mapStateToProps = state => ({
  project: state.projectDetail,
  currentUser: state.session.currentUser
});

export const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectView);
