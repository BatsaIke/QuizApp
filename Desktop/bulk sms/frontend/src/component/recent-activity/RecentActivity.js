// RecentActivity.js
import React from 'react';
import styles from './RecentActivity.module.css'; // Adjust the import path as necessary

const RecentActivity = ({ messages }) => {
  // Function to get the appropriate class based on status
  const getStatusClass = (status) => {
    return status?.toLowerCase() === "failed" ? styles.failed : styles.delivered;
  };

  if (!messages || messages.length === 0) {
    return <div>No recent activity to display.</div>; // Display message if no activities
  }

  return (
    <div className={styles.recentActivity}>
      <h3 className={styles.activityHeader}>Recent Activity</h3>
      <hr />
      <div className={styles.activitiesList}>
        {messages.map((message, index) => (
          <React.Fragment key={message._id || index}>
            <div className={styles.activity}>
            <div className={styles.title}>{message.content.slice(0, 10)}...</div>
              <div className={styles.time}>{new Date(message.sentAt).toLocaleString()}</div>
              <div className={`${styles.status} ${getStatusClass(message.status)}`}>
                {message.status}
              </div>
            </div>
            {index !== messages.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
