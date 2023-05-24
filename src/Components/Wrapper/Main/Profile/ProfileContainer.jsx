import React from 'react';
import { connect } from 'react-redux';
import Profile from '../Profile/Profile';
import {
  getStatus,
  getUserProfile,
  updateStatus,
} from '../../../../Redux/profile-reducer';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../../hoc/withAuthRedirect';
import { withRouter } from '../../../../hoc/withRouter';

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = this.props.userId;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let prevUserId = prevProps.router.params.userId;

    if (this.props.router.params.userId !== prevUserId && prevUserId) {
      this.refreshProfile();
    }
  }

  render() {
    const paramId = this.props.router.params.userId;
    const isMyAccount = paramId ? this.props.userId === +paramId : true;

    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        isMyAccount={isMyAccount}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId,
    photos: state.auth.photos,
  };
};

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
