import React from 'react';
import styles from './Create-post.module.css';
import Avatar from '../../../../Avatar/Avatar';
import ItemsContainer from './Items/ItemsContainer';

const PostCreate = (props) => {
  return (
    <div className={styles['create-post']}>
      <div className={styles.photo}>
        <Avatar variant={'small'} imgsrc={props.photos.small} />
      </div>
      <ItemsContainer />
    </div>
  );
};

export default PostCreate;
