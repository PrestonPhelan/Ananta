import { connect } from 'react-redux';

import CreateProjectModal from './create_project_modal';
import { createProject } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.session.errors,
  hideModal: ownProps.hideModal,
  teamId: state.teamDetail.id
});

const mapDispatchToProps = dispatch => ({
  createProject: project => dispatch(createProject(project))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProjectModal);
