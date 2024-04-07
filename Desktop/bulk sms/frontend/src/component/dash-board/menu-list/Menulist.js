import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaChartBar,
  FaUserEdit,
  FaSignOutAlt,
  FaSms,
  FaBook,
  FaBars,
  FaClock,
} from "react-icons/fa";
import styles from "./Menulist.module.css";
import ComposeMail from "../../compose-email/ComposeMail";
import Modal from "../../../UI/modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/slices/authSlice";
import stylesConfig from "../../../StyleConfig";
import useCustomStyles from "../../../hooks/useContacts/useCustomStyles";

function MenuList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactsModalOpen, setIsContactsModalOpen] = useState(false); // State for Contacts Option modal
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  const currentStyles = useCustomStyles(); 
 

  // Handler for navigating based on user selection
  const handleContactsNavigation = (path) => {
    setIsContactsModalOpen(false); // Close the modal
    navigate(path); // Navigate to the selected path
  };

  const handleLogout = () => {
    dispatch(logout()); 
    navigate('/');
  };

  return (
    <div className={styles[currentStyles.menuList]}>
      <button
        className={styles[currentStyles.composeButton]}
        onClick={() => setIsModalOpen(true)}
      >
        <FaSms className={styles.menuIcon} /> Compose SMS
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ComposeMail />
      </Modal>
      <div className={styles[currentStyles.menuItem]}>
        <NavLink to="/report" className={styles.menuLink}>
          <FaChartBar className={styles.menuIcon} />
          Reports
        </NavLink>
      </div>
      <div className={styles[currentStyles.menuItem]}>
        <NavLink to="/dashboard" className={styles.menuLink}>
          <FaBars className={styles.menuIcon} />
          Dashboard
        </NavLink>
      </div>

      <div className={styles[currentStyles.menuItem]}>
        <NavLink to="/contacts" className={styles.menuLink}>
          <FaBook className={styles.menuIcon} />
          All Contacts
        </NavLink>
      </div>
      <div className={styles[currentStyles.menuItem]}>
        <NavLink to="/contact-group" className={styles.menuLink}>
          <FaBook className={styles.menuIcon} />
          Group Contacts
        </NavLink>
      </div>

      <div className={styles[currentStyles.menuItem]}>
        <NavLink to="/schedular" className={styles.menuLink}>
          <FaClock className={styles.menuIcon} />
          schedular
        </NavLink>
      </div>
      <div className={styles[currentStyles.menuItem]}>
        <NavLink to="/profile" className={styles.menuLink}>
          <FaUserEdit className={styles.menuIcon} />
          Edit Profile
        </NavLink>
      </div>
      <div className={styles[currentStyles.menuItem]}>
        <div className={styles.menuLink} onClick={handleLogout}>
          <FaSignOutAlt className={styles.menuIcon} />
          Logout
        </div>
      </div>
    </div>
  );
}

export default MenuList;
