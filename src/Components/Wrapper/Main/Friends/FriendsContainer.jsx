import React from 'react';
import { connect } from 'react-redux';
import {
  follow,
  setCurrentPage,
  unfollow,
  toggleIsFollowingProgress,
  getUsers,
} from '../../../../Redux/users-reducer';
import Friends from './Friends';
import SvgSelector from '../../../SvgSelector/SvgSelector';
import styles from './Friends.module.css';
import { withAuthRedirect } from '../../../../hoc/withAuthRedirect';
import { compose } from 'redux';

class FriendsContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
    window.addEventListener('scroll', () => {
      const body = document.querySelector('body');
      const bodyHeight = body.scrollHeight - window.innerHeight;
      if (bodyHeight - window.scrollY === 0) {
        this.onPageChanged(this.props.currentPage + 1);
      }
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        <div className={styles.preloader}>
          {this.props.isFetching ? <SvgSelector id="preloader" /> : null}
        </div>

        <Friends
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.friendsPage.users,
    pageSize: state.friendsPage.pageSize,
    totalUsersCount: state.friendsPage.totalUsersCount,
    currentPage: state.friendsPage.currentPage,
    isFetching: state.friendsPage.isFetching,
    followingInProgress: state.friendsPage.followingInProgress,
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleIsFollowingProgress,
    getUsers,
  }),
  withAuthRedirect
)(FriendsContainer);
