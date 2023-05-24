import React from 'react';
import styles from './Items.module.css';

const Items = (props) => {
  const newPost = React.createRef();

  const addPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    const text = newPost.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={styles.items}>
      <textarea
        value={props.newPostText}
        onChange={onPostChange}
        ref={newPost}
        name="text"
        placeholder="Anything new?"
      />
      <button onClick={addPost}>Publish</button>
    </div>
  );
};

export default Items;
