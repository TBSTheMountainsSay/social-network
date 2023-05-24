import React from 'react';
import styles from './Item.module.css';

const Item = (props) => {
  return (
    <div className={styles.item}>
      <p>{props.count}</p>
      <div>{props.type}</div>
    </div>
  );
};

export default Item;
