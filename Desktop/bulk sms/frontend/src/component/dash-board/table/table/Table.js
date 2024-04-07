import React, { useEffect, useState } from 'react';
import styles from './Table.module.css'; // Define your table CSS
import TableRow from '../Tablerow';
import { fetchAllMessageStatuses } from '../../../../actions/messageAction';
import { useDispatch, useSelector } from 'react-redux';



  

function Table() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(20);
const dispatch = useDispatch();
const messageStatuses = useSelector((state) => state.message.messages);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = messageStatuses.slice(indexOfFirstRow, indexOfLastRow);
  


  const handleSelect = (id) => {
    const isAlreadySelected = selectedRows.includes(id);
    if (isAlreadySelected) {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };
 
useEffect(() => {
    dispatch(fetchAllMessageStatuses());
  }, [dispatch]);
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <>
    <div className={styles.tableHeader}>Message History</div> {/* Header added */}

    <table className={styles.table}>
      <thead>
        <tr>
          <th></th> {/* Optional: Implement select-all functionality here */}
          <th>Time</th>
          <th>From</th>
          <th>To</th>
          {/* <th>Type</th> */}
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {currentRows.length > 0 ? (
            currentRows.map(data => (
              <TableRow
                key={data.id}
                data={data}
                onSelect={handleSelect}
                isSelected={selectedRows.includes(data.id)}
              />
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: "center" }}>No messages to display</td>
            </tr>
          )}
        </tbody>
      </table>
      {currentRows.length > 0 && (
        <div className={styles.pagination}>
          {Array.from({ length: Math.ceil(messageStatuses.length / rowsPerPage) }, (_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

export default Table;