import React from 'react';
import styles from './Message.module.css';

const Message = (props) => {
  return (
    <div
      className={
        props.isMyMessage ? `${styles.message} ${styles.my}` : styles.message
      }
    >
      {props.message}
    </div>
  );
};

export default Message;
