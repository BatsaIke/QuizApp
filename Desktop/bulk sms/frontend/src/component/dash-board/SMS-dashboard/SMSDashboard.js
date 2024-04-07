// SMSDashboard/SMSDashboard.js
import React from 'react';
import styles from './SMSDashboard.module.css';
import Table from '../table/table/Table';

function SMSDashboard() {
  return (
    <div className={styles.smsDashboard}>
      <Table/>
      </div>
  );
}

export default SMSDashboard;
