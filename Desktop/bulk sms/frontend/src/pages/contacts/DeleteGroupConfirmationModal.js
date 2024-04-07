// DeleteGroupConfirmationModal.js
import React from 'react';
import styles from "./ContactsGroups.module.css";
import Modal from '../../UI/modal/Modal';

const DeleteGroupConfirmationModal = ({ isOpen, onClose, onConfirm }) => (
  <Modal onClose={onClose} isOpen={isOpen}>
    <div className={styles.confirmationModalContent}>
      <p>Are you sure you want to delete this group? It cannot be recovered.</p>
      <div className={styles.buttonContainer}>
        <button className={`${styles.confirmationButton} ${styles.yesButton}`} onClick={onConfirm}>Yes</button>
        <button className={`${styles.confirmationButton} ${styles.noButton}`} onClick={onClose}>No</button>
      </div>
    </div>
  </Modal>
);

export default DeleteGroupConfirmationModal;
