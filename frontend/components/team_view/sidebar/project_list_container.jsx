import { connect } from 'react-redux';

import ProjectList from './project_list';

const mapStateToProps = state  => ({
  projects: state.teamDetail.projects
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectList);
