import React from 'react';
import styles from './Post.module.css';
import Creator from './Creator/Creator';
import SvgSelector from '../../../../SvgSelector/SvgSelector';

const Post = (props) => {
  return (
    <div className={styles.post}>
      <Creator profile={props.profile} />
      <div className={styles.message}>{props.message}</div>
      <div className={styles.activities}>
        <div className={styles.item}>
          <SvgSelector id={'like'} />
          {props.likes}
        </div>
        <div className={styles.item}>
          <SvgSelector id={'comment'} />
          {props.comments}
        </div>
        <div className={styles.item}>
          <SvgSelector id={'repost'} />
          {props.reposts}
        </div>
      </div>
    </div>
  );
};

export default Post;
