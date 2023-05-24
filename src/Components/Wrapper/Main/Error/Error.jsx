import React from 'react';
import styles from './Error.module.css';

const Error = () => {
  return (
    <div className={styles.error}>
      <div className={styles.message}>This page has not been created :(</div>
    </div>
  );
};

export default Error;
