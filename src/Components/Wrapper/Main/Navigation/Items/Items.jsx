import React from 'react';
import styles from './Items.module.css';
import SvgSelector from '../../../../SvgSelector/SvgSelector';
import { NavLink } from 'react-router-dom';

const links = [
  { id: 'friends', name: 'Friends', href: '/friends' },
  { id: 'messenger', name: 'Messenger', href: '/dialogs' },
  { id: 'communities', name: 'Communities', href: '/communities' },
  { id: 'audio', name: 'Music', href: '/music' },
  { id: 'video', name: 'Videos', href: '/videos' },
  { id: 'feed', name: 'Feed', href: '/feed' },
  { id: 'settings', name: 'Settings', href: '/settings' },
];

const Items = () => {
  return (
    <div className={styles.items}>
      {links.map((link) => (
        <NavLink
          to={link.href}
          key={link.id}
          className={(item) =>
            item.isActive ? `${styles.item} ${styles.active}` : styles.item
          }
        >
          <SvgSelector id={link.id} />
          <p>{link.name}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default Items;
