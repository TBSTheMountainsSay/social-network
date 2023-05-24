import React from 'react';
import styles from './Items-adaptive.module.css';
import SvgSelector from '../../../../SvgSelector/SvgSelector';
import { NavLink } from 'react-router-dom';

const links = [
  { id: 'friends', href: '/friends' },
  { id: 'messenger', href: '/dialogs/' },
  { id: 'communities', href: '/communities' },
  { id: 'audio', href: '/music' },
  { id: 'profile', href: '/profile' },
];

const ItemsAdaptive = () => {
  return (
    <div className={styles['items-adaptive']}>
      {links.map((link) => (
        <NavLink
          to={link.href}
          key={link.id}
          className={(item) =>
            item.isActive
              ? `${styles['item-adaptive']} ${styles.active}`
              : styles['item-adaptive']
          }
        >
          <SvgSelector id={link.id} />
        </NavLink>
      ))}
    </div>
  );
};

export default ItemsAdaptive;
