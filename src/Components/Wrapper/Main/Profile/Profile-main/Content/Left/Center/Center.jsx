import React from 'react';
import styles from './Center.module.css';
import Name from '../../../../../../../Name/Name';
import StatusWithHooks from './StatusWithHooks';

const Center = (props) => {
  return (
    <div className={styles.center}>
      <Name variant="big" fullName={props.profile.fullName} />
      <StatusWithHooks
        status={props.status}
        updateStatus={props.updateStatus}
        isMyAccount={props.isMyAccount}
      />
    </div>
  );
};

export default Center;
