import React from 'react';
import styles from './Top.module.css';
import Avatar from '../../../../../../../Avatar/Avatar';
import ID from '../../../../../../../ID/ID';

const Top = (props) => {
  return (
    <div className={styles.top}>
      <div className={styles.avatar}>
        <Avatar variant="big" imgsrc={props.profile.photos.large} />
      </div>
      <div className={styles.id}>
        <ID userId={props.profile.userId} />
      </div>
    </div>
  );
};

export default Top;
