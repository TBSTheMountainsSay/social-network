import React from 'react';
import RightSidebar from './Right-sidebar';
import { connect } from 'react-redux';
import { logout } from '../../../../Redux/auth-reducer';

class RightSidebarContainer extends React.Component {
  render() {
    return <RightSidebar {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    photos: state.auth.photos,
  };
};

export default connect(mapStateToProps, { logout })(RightSidebarContainer);
