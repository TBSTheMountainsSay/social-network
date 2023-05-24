import React from 'react';
import styles from './Profile.module.css';
import Post from './Post/Post';
import PostCreate from './Create-post/Post-create';
import ProfileMain from './Profile-main/Profile-main';
import SvgSelector from '../../../SvgSelector/SvgSelector';

const Profile = (props) => {
  const postsElements = [...props.postsData]
    .reverse()
    .map((postData) => (
      <Post
        key={postData.id}
        message={postData.message}
        likes={postData.likes}
        comments={postData.comments}
        reposts={postData.reposts}
        profile={props.profile}
      />
    ));

  if (!props.profile) {
    return (
      <div className={styles.profile}>
        <SvgSelector id="preloader" className={styles['profile-preloader']} />
      </div>
    );
  }

  return (
    <div className={styles.profile}>
      <ProfileMain
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        isMyAccount={props.isMyAccount}
      />
      <PostCreate photos={props.photos} />
      {postsElements}
    </div>
  );
};

export default Profile;
