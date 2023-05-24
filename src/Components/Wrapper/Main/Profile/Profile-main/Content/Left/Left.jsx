import React from 'react';
import styles from './Left.module.css';
import Center from './Center/Center';
import Top from './Top/Top';

const Left = (props) => {
  return (
    <div className={styles.left}>
      <Top profile={props.profile} />
      <Center
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        isMyAccount={props.isMyAccount}
      />
    </div>
  );
};

export default Left;
