import React, { useEffect, useState } from 'react';
import styles from './Center.module.css';

const StatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    if (!props.isMyAccount) {
      return;
    }
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (event) => {
    setStatus(event.currentTarget.value);
  };

  return (
    <div className={styles.status}>
      {!editMode && (
        <div>
          <span onClick={activateEditMode}>
            {props.isMyAccount ? status || 'Изменить статус' : status || ''}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            className={styles['input-status']}
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default StatusWithHooks;
