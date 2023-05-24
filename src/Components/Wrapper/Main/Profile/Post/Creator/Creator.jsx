import React from 'react';
import styles from './Creator.module.css';
import Avatar from '../../../../../Avatar/Avatar';
import Name from '../../../../../Name/Name';

const Creator = (props) => {
  return (
    <div className={styles.creator}>
      <div className={styles.avatar}>
        <Avatar variant="small" imgsrc={props.profile.photos.small} />
      </div>
      <div className={styles.name}>
        <Name variant="small" fullName={props.profile.fullName} />
      </div>
    </div>
  );
};

export default Creator;
