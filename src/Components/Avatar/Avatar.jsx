import React from 'react';
import styles from './Avatar.module.css';
import { NavLink } from 'react-router-dom';
import userIcon from './../../../src/Icons/userIcon.png';

const Avatar = (props) => {
  const sizeOfAvatar = () => {
    switch (props.variant) {
      case 'veryBig': {
        return styles.veryBig;
      }
      case 'big': {
        return styles.big;
      }
      default: {
        return styles.small;
      }
    }
  };
  return (
    <NavLink
      to={props.url || '/profile'}
      // className={`${styles.avatar} ${
      //   props.variant === 'big' ? styles.big : styles.small
      // }`}
      className={`${styles.avatar} ${sizeOfAvatar()}`}
    >
      <img src={props.imgsrc || userIcon} alt={'#'} />
    </NavLink>
  );
};

export default Avatar;
