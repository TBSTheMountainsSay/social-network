import React from 'react';
import styles from './PrivateLayout.module.css';
import Header from '../Components/Wrapper/Header/Header';
import NavigationAdaptive from '../Components/Wrapper/Main/Navigation-adaptive/Navigation-adaptive';
import { Outlet } from 'react-router-dom';
import NavigationContainer from '../Components/Wrapper/Main/Navigation/NavigationContainer';

const PrivateLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.main}>
        <NavigationContainer />
        <Outlet />
        <NavigationAdaptive />
      </div>
    </div>
  );
};

export default PrivateLayout;
