import React from 'react';
import styles from './Info.module.css';
import Item from '../../../Navigation/Profile/Info/Item/Item';
import SvgSelector from '../../../../../SvgSelector/SvgSelector';

const Info = () => {
  return (
    <div className={styles.info}>
      <div className={styles.item}>
        <Item count="68" type="Photos" />
      </div>
      <div className={styles.item}>
        <Item count="568" type="Followers" />
      </div>
      <div className={styles.item}>
        <Item count="5.5k" type="Friends" />
      </div>
      <div className={styles.item}>
        <SvgSelector id={'burger'} />
      </div>
    </div>
  );
};

export default Info;
