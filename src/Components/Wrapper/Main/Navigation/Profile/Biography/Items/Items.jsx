import React from 'react';
import styles from './items.module.css';
import Name from '../../../../../../Name/Name';
import ID from '../../../../../../ID/ID';

const Items = (props) => {
  return (
    <div className={styles.items}>
      <Name variant="small" fullName={props.fullName} />
      <ID userId={props.userId} />
    </div>
  );
};

export default Items;
