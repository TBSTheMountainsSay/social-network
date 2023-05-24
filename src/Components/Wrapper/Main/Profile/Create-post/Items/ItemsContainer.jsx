import React from 'react';
import {
  addPost,
  updateNewPostText,
} from '../../../../../../Redux/profile-reducer';
import Items from './Items';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
  };
};

const ItemsContainer = connect(mapStateToProps, {
  addPost,
  updateNewPostText,
})(Items);

export default ItemsContainer;
