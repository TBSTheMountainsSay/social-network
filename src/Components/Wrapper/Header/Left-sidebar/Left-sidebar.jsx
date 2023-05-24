import React from 'react';
import styles from './Left-sidebar.module.css';
import logo from '../../../../Icons/Logo.png';

const LeftSidebar = () => {
  return (
    <div className={styles['left-sidebar']}>
      <div className={styles.logo}>
        <img src={logo} alt={'#'} />
      </div>
      <p>FLIGHT</p>
    </div>
  );
};

export default LeftSidebar;
