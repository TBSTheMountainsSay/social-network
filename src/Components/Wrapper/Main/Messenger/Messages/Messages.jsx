import React from 'react';
import styles from './Messages.module.css';
import Message from './Message/Message';
import SvgSelector from '../../../../SvgSelector/SvgSelector';

const Messages = (props) => {
  const messagesElements = props.messagesData.map((messageData) => (
    <Message
      message={messageData.message}
      isMyMessage={messageData.isMyMessage}
    />
  ));

  const newMessage = React.createRef();

  const onAddMessage = () => {
    props.addMessage();
  };

  const onMessageChange = () => {
    const text = newMessage.current.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.messages}>{messagesElements}</div>
      <input
        value={props.newMessageText}
        onChange={onMessageChange}
        ref={newMessage}
        name="text"
        placeholder="Write a message..."
      />
      <button onClick={onAddMessage}>
        <SvgSelector id={'send'} />
      </button>
    </div>
  );
};

export default Messages;
