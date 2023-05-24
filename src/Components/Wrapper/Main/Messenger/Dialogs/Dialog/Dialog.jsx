import React from 'react';
import styles from './Dialog.module.css';
import Avatar from '../../../../../Avatar/Avatar';

const Dialog = (props) => {
  return (
    <div
      className={
        props.isActive ? `${styles.dialog} ${styles.active}` : styles.dialog
      }
    >
      <div className={styles.avatar}>
        <Avatar />{' '}
      </div>
      <p>{props.name}</p>
    </div>
  );
};

export default Dialog;
