// CreateGroupFormModal.js
import React from 'react';
import styles from "./ContactsGroups.module.css";
import Modal from '../../UI/modal/Modal';

const CreateGroupFormModal = ({ isOpen, onClose, onSubmit, groupName, setGroupName, description, setDescription }) => (
  <Modal onClose={onClose} isOpen={isOpen} className={styles.groupModal}>
    <form onSubmit={onSubmit} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
        placeholder="Group Name"
        required
      />
      <textarea
        className={styles.textarea}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit" className={styles.button}>Create Group</button>
    </form>
  </Modal>
);

export default CreateGroupFormModal;
