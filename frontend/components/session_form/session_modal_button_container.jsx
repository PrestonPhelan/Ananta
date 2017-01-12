import React from 'react';
import { connect } from 'react-redux';

import { demoLogin } from '../../actions/session_actions';
import SessionModalButtons from './session_modal_buttons';

const mapStateToProps = (store, ownProps) => ({
  formType: ownProps.formType
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  demoLogin: () => dispatch(demoLogin()),
  switchModals: ownProps.switchModals
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionModalButtons);
