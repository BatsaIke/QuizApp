import React, { useEffect, useState } from "react";
import styles from "./MainDashboard.module.css"; // Ensure this path matches your file structure
import { NavLink } from "react-router-dom";
import RecentActivity from "../recent-activity/RecentActivity";
import MessagesChart from "../dashboard-chart/MessagesChart";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMessageStatuses } from "../../actions/messageAction";
import useCustomStyles from "../../hooks/useContacts/useCustomStyles";
import { getAllContacts } from "../../actions/contactsAction";

function MainDashboard() {
const dispatch = useDispatch()
const currentStyles = useCustomStyles()
  const totalSMS = 2000;
  const totalContacts = 460;
  const accountBalance = 200.0; // Assuming this is in Cedis
  const [selectedDate, setSelectedDate] = useState("");
  const messages = useSelector(state => state.message.messages);
  const contacts = useSelector(state => state.contact.contacts);
console.log(contacts, "CONTRACT")
  console.log(messages);


  useEffect(() => {
    dispatch(fetchAllMessageStatuses());
    dispatch(getAllContacts());
    }, [dispatch]);

  return (
    <div className={styles.dashboardContainer}>
      <header className={styles[currentStyles.dashboardHeader]}>Bulk SMS Dashboard</header>
      {/* Header added here */}
      <div className={styles.row}>
        <div className={styles[currentStyles.box]}>
          <NavLink to="/report" className={styles.NavLink}>
            <div className={styles[currentStyles.boxMain]}>{totalSMS}</div>
            <div className={styles[currentStyles.miniBox]}>Total Messages</div>
          </NavLink>
        </div>
        <div className={styles[currentStyles.box]}>
          <NavLink to="/contacts" className={styles.NavLink}>
            <div className={styles[currentStyles.boxMain]}>{contacts?.count}</div>
            <div className={styles[currentStyles.miniBox]}>Total Contacts</div>
          </NavLink>
        </div>
        <div className={styles[currentStyles.box]}>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className={styles.datePicker}
          />
          <div className={styles[currentStyles.miniBox]}> 0 Total Sent Today</div>
        </div>
        <div className={styles[currentStyles.box]}>
          <div className={styles[currentStyles.boxMain]}>₵ {accountBalance.toFixed(2)}</div>
          <div className={styles[currentStyles.miniBox]}>Account Balance</div>
        </div>
      </div>
      <div className={styles.row}>
        <NavLink to='/report' className={styles.halfBox}>
          <RecentActivity messages={messages}/>
        </NavLink>
        <div className={styles.halfBox}>
          {" "}
          <MessagesChart />
        </div>
      </div>
    </div>
  );
}

export default MainDashboard;
