import React from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../../hoc/withAuthRedirect';
import Messenger from './Messenger';
import { compose } from 'redux';

const mapStateToProps = () => {
  return {};
};

export default compose(connect(mapStateToProps), withAuthRedirect)(Messenger);
