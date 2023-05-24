import React from 'react';
import styles from './ID.module.css';

const ID = ({ userId }) => {
  return (
    <div className={styles.id}>
      {userId ? `@${userId}` : '@merigold'}
      {/*@merigold*/}
    </div>
  );
};

export default ID;
