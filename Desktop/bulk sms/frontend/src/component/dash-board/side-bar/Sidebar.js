// Sidebar/Sidebar.js
import React from 'react';
import styles from './Sidebar.module.css';
import UserProfile from '../user-profile/Userprofile';
import MenuList from '../menu-list/Menulist';
import useCustomStyles from '../../../hooks/useContacts/useCustomStyles';

function Sidebar() {
  const currentStyles = useCustomStyles(); 
  return (
    <div className={styles[currentStyles.sidebar]}>
      <UserProfile  />
      <MenuList />
    </div>
  );
}

export default Sidebar;
