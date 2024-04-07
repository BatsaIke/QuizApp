import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import styles from "./MessageDetails.module.css"; // Import the CSS module

function MessageDetails() {
  let { id } = useParams();
  let location = useLocation();
  let navigate = useNavigate();

  const messageData = location.state?.messageData || {
    id,
  };
  console.log(messageData,"Data");

  return (
    <div className={styles.detailsContainer}>
      <h2 className={styles.messageHeader}>Message Details</h2>
      <p>
        <strong>Time:</strong> {messageData.sentAt}
      </p>
      <p>
        <strong>From:</strong> {messageData.from}
      </p>
      <p>
        <strong>Message:</strong> {messageData?.content}
      </p>
     

      <div>
        <strong>Receipients:</strong>
        <table className={styles.recipientTable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Number</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {messageData.contacts.map((recipient) => (
              <tr key={recipient.id}>
                <td>{recipient.name}</td>
                <td>{recipient.phoneNumber}</td>
                <td>{recipient.email}</td>
                <td>{messageData?.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className={styles.goBackButton} onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
}

export default MessageDetails;
