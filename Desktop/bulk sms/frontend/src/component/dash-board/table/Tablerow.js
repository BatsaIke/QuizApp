import React from "react";
import styles from "./TableRow.module.css";
import ActionButton from "../../action-bottons/Actionbuttons";
import { FaTrashAlt, FaEye } from "react-icons/fa"; // Import specific icons
import { useNavigate } from "react-router";
import formatDate from "../../../utils/formatDate";

function TableRow({ data, onSelect, isSelected }) {
  const navigate = useNavigate();
  // Adjusted to accept onSelect and isSelected props
console.log(data)
  const handleDelete = () => {
    console.log("Delete", data);
    // Implement delete functionality
  };

  const handleView = () => {
    console.log("View", data);
    navigate(`/message/${data._id}`, { state: { messageData: data } });
  };

  // Determine row classes based on selection
  const rowClasses = isSelected ? `${""} ${styles.selectedRow}` : "";
  // Render 'from' field content
  const renderToField = () => {
    if (!data.contacts || data.contacts.length === 0) {
      return "No contact info";
    } else if (data.contacts.length === 1) {
      // If there is only one contact
      return data.contacts[0].phoneNumber;
    } else if (data.contacts.length === 2) {
      // If there are two contacts
      return data.contacts.map(contact => contact.phoneNumber).join(", ");
    } else {
      // If there are more than two contacts
      const firstTwoContacts = data.contacts.slice(0, 2).map(contact => contact.phoneNumber).join(", ");
      return `${firstTwoContacts}, ...`;
    }
  };
  
  
  return (
    <tr className={rowClasses}>
      <td>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onSelect(data.id)}
        />
      </td>
      <td>{formatDate(data.sentAt)}</td>
      <td>{data.from}</td>
      <td>{renderToField()}</td>
      {/* <td>{data.type}</td> */}
      <td>{data.status}</td>
      <td className={styles.actionButton}>
        <ActionButton
          onClick={handleView}
          className={styles.viewButton}
          icon={<FaEye />}
        />
        <ActionButton
          onClick={handleDelete}
          className={styles.deleteButton}
          icon={<FaTrashAlt />}
        />
      </td>
    </tr>
  );
}

export default TableRow;
