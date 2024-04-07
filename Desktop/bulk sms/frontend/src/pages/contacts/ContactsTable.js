import React from 'react';
import formatDateToMonthDay from '../../utils/formateDayToMonth';
import styles from "./Contacts.module.css"; // Ensure the path is correct

function ContactsTable({ contacts, selectedContacts, handleCheckboxChange }) {
  return (
    <table className={styles.contactsTable}> {/* Use styles object for class */}
      <thead>
        <tr>
          <th>Select</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Facebook</th>
          <th>Instagram</th>
          <th>Birthday</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr key={contact._id}>
            <td>
              <input
                type="checkbox"
                checked={selectedContacts.includes(contact._id)}
                onChange={() => handleCheckboxChange(contact._id)}
              />
            </td>
            <td>{contact.fullName}</td>
            <td>{contact.email}</td>
            <td>{contact.phoneNumber}</td>
            <td>{contact.facebookId}</td>
            <td>{contact.instagramId}</td>
            <td>{formatDateToMonthDay(contact.dob)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ContactsTable;
