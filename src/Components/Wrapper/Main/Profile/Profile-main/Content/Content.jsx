import React from 'react';
import styles from './Content.module.css';
import Left from './Left/Left';

const Content = (props) => {
  return (
    <div className={styles.content}>
      <Left
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        isMyAccount={props.isMyAccount}
      />
      <div className={styles.right}>Last seen 22 minutes ago</div>
    </div>
  );
};

export default Content;
