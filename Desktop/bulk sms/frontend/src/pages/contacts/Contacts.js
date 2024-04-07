import React, { useState } from "react";
import Modal from "../../UI/modal/Modal";
import AddContactForm from "../../component/contact-form/AddContactForm";
import styles from "./Contacts.module.css";
import { useContacts } from "../../hooks/useContacts/useContacts";
import { filterContacts } from "../../utils/ContactUtills";
import { useLocation } from "react-router-dom";
import Spinner from "../../UI/Spinner";
import ContactsTable from "./ContactsTable";

function Contacts({ onSelectContacts, className }) {
  const location = useLocation();
  const { groupName, groupId, openModal } = location.state || {};
  const { contacts, setCurrentPage, loading, totalPages } = useContacts(20, groupId);

  const [searchTerm, setSearchTerm] = useState("");
  // Assuming filterContacts returns an array
  const filteredContacts = filterContacts(contacts.contacts || [], searchTerm);

  const [selectedContacts, setSelectedContacts] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(openModal || false);

  // Define handlePageChange before its usage
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCheckboxChange = (contactId) => {
    setSelectedContacts((prevSelected) =>
      prevSelected.includes(contactId)
        ? prevSelected.filter((id) => id !== contactId)
        : [...prevSelected, contactId]
    );
  };

  const handleSelectAllChange = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setSelectedContacts(filteredContacts?.contacts.map(contact => contact._id));
    } else {
      setSelectedContacts([]);
    }
  };

  const handleContactAddSuccess = () => {
    setIsModalOpen(false);
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className={`${styles.contactsContainer} ${className}`}>
      <h2 className={styles.contactsHeader}>{groupName ? `${groupName} Contacts` : "All Contacts"}</h2>
      <div className={styles.topBar}>
        <input
          type="text"
          placeholder="Search contacts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        <button className={styles.addButton} onClick={toggleModal}>Add New Contacts</button>
      </div>
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <AddContactForm onAddSuccess={handleContactAddSuccess} groupId={groupId}/>
      </Modal>
      {filteredContacts.length > 0 ? (
        <>
          <ContactsTable
            contacts={filteredContacts}
            selectedContacts={selectedContacts}
            handleCheckboxChange={handleCheckboxChange}
          />
          <div className={styles.pagination}>
            {Array.from({ length: totalPages }, (_, i) => (
              <button key={i} onClick={() => handlePageChange(i + 1)}>{i + 1}</button>
            ))}
          </div>
        </>
      ) : (
        <p>No contacts found.</p>
      )}
    </div>
  )}

export default Contacts;
