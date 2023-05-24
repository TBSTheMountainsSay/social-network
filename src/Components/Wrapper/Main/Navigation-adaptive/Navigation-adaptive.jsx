import React from 'react';
import styles from './Navigation-adaptive.module.css';
import ItemsAdaptive from './Items-adaptive/Items-adaptive';

const NavigationAdaptive = () => {
  return (
    <div className={styles['navigation-adaptive']}>
      <ItemsAdaptive />
    </div>
  );
};

export default NavigationAdaptive;
