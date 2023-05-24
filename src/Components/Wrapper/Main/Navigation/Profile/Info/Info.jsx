import React from 'react';
import styles from './Info.module.css';
import Item from './Item/Item';

const Info = () => {
  return (
    <div className={styles.info}>
      <Item count="5.5k" type="Friends" />
      <Item count="568" type="Followers" />
      <Item count="112" type="Posts" />
    </div>
  );
};

export default Info;
