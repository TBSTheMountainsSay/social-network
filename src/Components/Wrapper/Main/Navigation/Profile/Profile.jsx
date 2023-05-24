import React from 'react';
import styles from './Profile.module.css';
import Biography from './Biography/Biograghy';
import Info from './Info/Info';

const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <Biography
        photos={props.photos}
        fullName={props.fullName}
        userId={props.userId}
        isAuth={props.isAuth}
      />
      <Info />
    </div>
  );
};

export default Profile;
