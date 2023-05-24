import React from 'react';
import styles from './Profile-main.module.css';
import Content from './Content/Content';
import Info from './Info/Info';

const ProfileMain = (props) => {
  return (
    <div className={styles['profile-main']}>
      <img
        src="https://cdn.gamestatic.net/files/editor_uploads/NikolayD/2022/12december/vse-alternativnye-obrazy-v-vedmake-3-ciri-lyutik-jennifehr_4.jpg"
        alt=""
      />
      <Content
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        isMyAccount={props.isMyAccount}
      />
      <Info />
    </div>
  );
};

export default ProfileMain;
