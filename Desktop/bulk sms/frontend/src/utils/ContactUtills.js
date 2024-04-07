export const generateDummyContacts = (total = 50) => {
    return Array.from({ length: total }, (_, i) => ({
        id: i + 1,
        fullName: `User ${i + 1}`,
        email: `user${i + 1}@example.com`,
        phoneNumber: `123-456-${(i + 1).toString().padStart(2, "0")}`,
    }));
};

// utils/contactUtils.js
export const filterContacts = (contacts, searchTerm) => {
    if (!searchTerm.trim()) return contacts;
    return contacts.filter((contact) =>
      contact.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phoneNumber.includes(searchTerm)
    );
  };
  

export const paginateContacts = (contacts, currentPage, contactsPerPage) => {
    const indexOfLastContact = currentPage * contactsPerPage;
    const indexOfFirstContact = indexOfLastContact - contactsPerPage;
    return contacts.slice(indexOfFirstContact, indexOfLastContact);
};

export const toggleSelectedContact = (selectedContacts, contactId) => {
    const isSelected = selectedContacts.includes(contactId);
    if (isSelected) {
        return selectedContacts.filter(id => id !== contactId);
    } else {
        return [...selectedContacts, contactId];
    }
};