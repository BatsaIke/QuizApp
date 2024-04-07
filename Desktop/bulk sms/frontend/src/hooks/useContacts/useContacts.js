// hooks/useContacts.js
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContacts } from '../../actions/contactsAction';

export const useContacts = (contactsPerPage = 20, groupId = null) => {
  const dispatch = useDispatch();
  const { contacts: contactList, loading } = useSelector((state) => state.contact);

  useEffect(() => {
    // Adjusting to conditionally fetch based on groupId
    dispatch(getAllContacts(groupId));
  }, [dispatch, groupId]);

  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = Array.isArray(contactList) ? contactList.slice(
    indexOfFirstContact,
    indexOfLastContact
  ) : [];
  return { contacts: contactList, currentContacts, setCurrentPage, loading };
};
