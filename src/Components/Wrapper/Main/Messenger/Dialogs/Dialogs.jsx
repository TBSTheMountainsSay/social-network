import React from 'react';
import styles from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router';

const Dialogs = (props) => {
  const params = useParams();
  const dialogId = params['*'];
  const dialogsElements = props.dialogsData.map((userData) => (
    <NavLink to={`/dialogs/${userData.id}`}>
      <Dialog name={userData.name} isActive={dialogId === userData.id} />
    </NavLink>
  ));

  return (
    <div className={styles.dialogs}>
      <input type="text" placeholder="Search" />
      {dialogsElements}
    </div>
  );
};

export default Dialogs;
