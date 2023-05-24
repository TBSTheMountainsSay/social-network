import React, { useEffect, useState } from 'react';
import styles from './Messenger.module.css';
import DialogsContainer from './Dialogs/DialogsContainer';
import MessagesContainer from './Messages/MessagesContainer';
import { Route, Routes, useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

const Messenger = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const params = useParams();
  const dialogId = params['*'];
  const isWideScreen = width >= 480;
  let navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        console.log('redirect');
        navigate('/dialogs');
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.messenger}>
      {isWideScreen ? (
        <>
          <div className={styles.wrapper}>
            <Routes>
              <Route path={':id'} element={<MessagesContainer />} />
            </Routes>
          </div>
          <DialogsContainer />
        </>
      ) : dialogId ? (
        <div className={styles.wrapper}>
          <Routes>
            <Route path={':id'} element={<MessagesContainer />} />
          </Routes>
        </div>
      ) : (
        <DialogsContainer />
      )}
    </div>
  );
};

export default Messenger;
