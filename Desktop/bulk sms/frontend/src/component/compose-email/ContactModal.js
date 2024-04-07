import React from 'react';
import Modal from "../../UI/modal/Modal";
import Button from '../botton/Button';
import Contacts from '../../pages/contacts/Contacts';

const ContactModal = ({ isModalOpen, closeModal, onSelectContacts }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onClose={closeModal}
      footer={<Button label="Confirm Selection" onClick={closeModal} />}
    >
      <Contacts onSelectContacts={onSelectContacts} />
    </Modal>
  );
};

export default ContactModal;
