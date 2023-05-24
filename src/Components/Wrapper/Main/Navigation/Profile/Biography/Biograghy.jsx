import React from 'react';
import styles from './Biography.module.css';
import Avatar from '../../../../../Avatar/Avatar';
import Items from './Items/Items';
import { NavLink } from 'react-router-dom';

const Biography = (props) => {
  return (
    <NavLink to="/profile" className={styles.biography}>
      <div className={styles.avatar}>
        <Avatar
          variant={'small'}
          imgsrc={props.isAuth ? props.photos.small : null}
        />
      </div>
      <Items fullName={props.fullName} userId={props.userId} />
    </NavLink>
  );
};

export default Biography;
