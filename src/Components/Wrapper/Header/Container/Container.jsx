import React from 'react';
import styles from './Container.module.css';
import { Route, Routes } from 'react-router-dom';

const Container = () => {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/profile" element="My Profile" />
        <Route path="/friends" element="Friends" />
        <Route path="/dialogs/*" element="Messenger" />
        <Route path="/communities" element="Communities" />
        <Route path="/music" element="Music" />
        <Route path="/videos" element="Videos" />
        <Route path="/feed" element="Feed" />
        <Route path="/settings" element="Settings" />
      </Routes>
    </div>
  );
};

export default Container;
