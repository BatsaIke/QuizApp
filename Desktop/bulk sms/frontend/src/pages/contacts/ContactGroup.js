// ContactsGroups.js
import React, { useEffect, useState } from "react";
import styles from "./ContactsGroups.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createGroup, deleteGroup, getAllGroups } from "../../actions/groupsAction";
import { set_Alert } from "../../actions/alertAction";
import { useNavigate } from "react-router";
import CreateGroupFormModal from "./CreateGroupFormModal";
import DeleteGroupConfirmationModal from "./DeleteGroupConfirmationModal";
import GroupsListTable from "./GroupsListTable";


function ContactsGroups() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { groups, loading } = useSelector((state) => state.groups);
  const [isCreateGroupModalOpen, setIsCreateGroupModalOpen] = useState(false);
  const [isDeleteConfirmModalOpen, setIsDeleteConfirmModalOpen] = useState(false);
  const [groupToDelete, setGroupToDelete] = useState(null);
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    dispatch(getAllGroups());
  }, [dispatch]);

  const handleCreateGroupSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(createGroup({ groupName, description }));
    if (result.success) {
      dispatch(set_Alert("Group created successfully", "success"));
      setIsCreateGroupModalOpen(false);
      setGroupName("");
      setDescription("");
      dispatch(getAllGroups());
    }
  };

  const handleDeleteGroup = async () => {
    const result = await dispatch(deleteGroup(groupToDelete));
    if (result.success) {
      dispatch(set_Alert("Group deleted successfully", "success"));
      setIsDeleteConfirmModalOpen(false);
      dispatch(getAllGroups());
    }
  };

  const handleViewGroup = (group) => {
    navigate("/contacts", { state: { groupName: group.groupName, groupId: group._id } });
  };

  const handleAddGroup = (group) => {
    navigate("/contacts", { state: {openModal:true, groupName: group.groupName, groupId: group._id } });
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>Contact Groups</div>
      <button className={styles.button} onClick={() => setIsCreateGroupModalOpen(true)}>Create New Group</button>

      <CreateGroupFormModal
        isOpen={isCreateGroupModalOpen}
        onClose={() => setIsCreateGroupModalOpen(false)}
        onSubmit={handleCreateGroupSubmit}
        groupName={groupName}
        setGroupName={setGroupName}
        description={description}
        setDescription={setDescription}
      />

      <DeleteGroupConfirmationModal
        isOpen={isDeleteConfirmModalOpen}
        onClose={() => setIsDeleteConfirmModalOpen(false)}
        onConfirm={handleDeleteGroup}
      />

      <GroupsListTable
        groups={groups}
        openDeleteConfirmModal={(groupId) => {
          setGroupToDelete(groupId);
          setIsDeleteConfirmModalOpen(true);
        }}
        handleViewGroup={handleViewGroup}
        handleAddGroup={handleAddGroup}
      />
    </div>
  );
}

export default ContactsGroups;
