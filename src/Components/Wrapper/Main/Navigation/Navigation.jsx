import React from 'react';
import styles from './Navigation.module.css';
import Profile from './Profile/Profile';
import Items from './Items/Items';

const Navigation = (props) => {
  return (
    <div className={styles.navigation}>
      <Profile
        photos={props.photos}
        fullName={props.fullName}
        userId={props.userId}
        isAuth={props.isAuth}
      />
      <Items />
    </div>
  );
};

export default Navigation;
