import React from 'react';
import styles from './Right-sidebar.module.css';
import Avatar from '../../../Avatar/Avatar';
import { NavLink } from 'react-router-dom';

const RightSidebar = (props) => {
  return (
    <div className={styles['right-sidebar']}>
      <input type="text" placeholder="Search" />
      <NavLink to={'/login'} className={styles.loginBlock}>
        {props.isAuth ? (
          <button onClick={props.logout}>
            <Avatar variant={'small'} imgsrc={props.photos.small} />
          </button>
        ) : (
          <button onClick={props.login}>Login</button>
        )}
      </NavLink>
    </div>
  );
};

export default RightSidebar;
