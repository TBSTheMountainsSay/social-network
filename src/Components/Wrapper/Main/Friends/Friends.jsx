import React from 'react';
import styles from './Friends.module.css';
import Avatar from '../../../Avatar/Avatar';

const Friends = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.friends}>
      {props.users.map((user) => (
        <div key={user.id} className={styles.user}>
          <Avatar
            variant={'veryBig'}
            url={`/profile/${user.id}`}
            imgsrc={user.photos.small}
          />
          <div className={styles.name}>{user.name}</div>
          <div className={styles.status}>{user.status}</div>
          {user.followed ? (
            <button
              className={styles['button-grey']}
              disabled={props.followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                props.unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              className={styles.button}
              disabled={props.followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                props.follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Friends;
