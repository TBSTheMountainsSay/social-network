import React from 'react';
import styles from './Header.module.css';
import LeftSidebar from './Left-sidebar/Left-sidebar';
import Container from './Container/Container';
import RightSidebarContainer from './Right-sidebar/Right-sedibarContainer';

const Header = () => {
  return (
    <div className={styles.header}>
      <LeftSidebar />
      <Container />
      <RightSidebarContainer />
    </div>
  );
};

export default Header;
