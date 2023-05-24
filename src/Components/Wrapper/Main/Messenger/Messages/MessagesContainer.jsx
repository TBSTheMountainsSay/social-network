import React from 'react';
import { connect } from 'react-redux';
import {
  addMessage,
  updateNewMessageText,
} from '../../../../../Redux/messenger-reducer';
import Messages from './Messages';

const mapStateToProps = (state) => {
  return {
    messagesData: state.messengerPage.messagesData,
    newMessageText: state.messengerPage.newMessageText,
  };
};

const MessagesContainer = connect(mapStateToProps, {
  addMessage,
  updateNewMessageText,
})(Messages);
export default MessagesContainer;
