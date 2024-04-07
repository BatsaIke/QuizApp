import React, { useState } from 'react';
import styles from './Scheduler.module.css'; // Ensure the path is correct
import ComposeMail from '../../component/compose-email/ComposeMail'; // Ensure the path is correct

function Scheduler() {
  const [scheduleDate, setScheduleDate] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');
  const [message, setMessage] = useState('');
  const [repeatInterval, setRepeatInterval] = useState('No Repeat');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Construct a single value for scheduled date and time
    const scheduledDateTime = `${scheduleDate}T${scheduleTime}`;
    console.log({ scheduledDateTime, message, repeatInterval });
    // Further processing, like calling an API to save the schedule
  };

  return (
    <form className={styles.schedulerForm} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <label htmlFor="scheduleDate">Date:</label>
        <input
          type="date"
          id="scheduleDate"
          value={scheduleDate}
          onChange={(e) => setScheduleDate(e.target.value)}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="scheduleTime">Time:</label>
        <input
          type="time"
          id="scheduleTime"
          value={scheduleTime}
          onChange={(e) => setScheduleTime(e.target.value)}
        />
      </div>
      <div className={styles.composeMessage}>
        <label>Message:</label>
        <ComposeMail onMessageChange={(msg) => setMessage(msg)} />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="repeatInterval">Repeat:</label>
        <select
          id="repeatInterval"
          value={repeatInterval}
          onChange={(e) => setRepeatInterval(e.target.value)}
          className={styles.select}
        >
          <option value="No Repeat">No Repeat</option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>
      <button type="submit" className={styles.submitButton}>Schedule</button>
    </form>
  );
}

export default Scheduler;
