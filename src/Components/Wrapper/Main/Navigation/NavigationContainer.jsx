import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Navigation from './Navigation';

class NavigationContainer extends React.Component {
  render() {
    return <Navigation {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    fullName: state.auth.fullName,
    userId: state.auth.userId,
    photos: state.auth.photos,
    isAuth: state.auth.isAuth,
  };
};

export default compose(connect(mapStateToProps, {}))(NavigationContainer);
