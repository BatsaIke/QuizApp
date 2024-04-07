// GroupsListTable.js
import React from "react";
import {
  AiOutlineDelete,
  AiOutlineEye,
  AiOutlineFolderAdd,
  AiOutlineMail,
} from "react-icons/ai";
import styles from "./ContactsGroups.module.css";
import formatDate from "../../utils/formatDate";
import { useNavigate } from "react-router";

const GroupsListTable = ({
  groups,
  handleDeleteGroup,
  handleViewGroup,
  handleAddGroup,
  openDeleteConfirmModal,
  openAddContactsModal,
}) => {

  return (
    <div className={styles.groupsList}>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Group Name</th>
            <th>Description</th>
            <th>Date Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group, index) => (
            <tr key={group._id}>
              <td>{index + 1}</td>
              <td>{group.groupName}</td>
              <td>{group.description}</td>
              <td>{formatDate(group.createdAt)}</td>
              <td>
                <div
                  className={styles.tooltip}
                  
                  onClick={() => handleAddGroup(group)}
                >
                  <AiOutlineFolderAdd className={styles.actionIcon} />
                  <span className={styles.tooltipText}>Add Contacts</span>
                </div>
                <div className={styles.tooltip}>
                  <AiOutlineMail className={styles.actionIcon} />
                  <span className={styles.tooltipText}>Send Message</span>
                </div>
                <div className={styles.tooltip}>
                  <AiOutlineDelete
                    className={styles.actionIcon}
                    onClick={() => openDeleteConfirmModal(group._id)}
                  />
                  <span className={styles.tooltipText}>Delete Group</span>
                </div>
                <div
                  className={styles.tooltip}
                  onClick={() => handleViewGroup(group)}
                >
                  <AiOutlineEye
                    className={styles.actionIcon}
                    onClick={() => handleViewGroup(group)}
                  />
                  <span className={styles.tooltipText}>Veiw Group</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default GroupsListTable;
