import React from 'react';
import styles from './Name.module.css';

const Name = ({ fullName, variant }) => {
  return (
    <div
      className={`${styles.name} ${
        variant === 'big' ? styles.big : styles.small
      }`}
    >
      {fullName ? fullName : 'Triss Merigold'}
      {/*Triss Merigold*/}
    </div>
  );
};

export default Name;
