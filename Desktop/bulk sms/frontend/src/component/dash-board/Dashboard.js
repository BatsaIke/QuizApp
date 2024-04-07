// App.js
import React from 'react';
import './Dashboard.module.css';
import SMSDashboard from './SMS-dashboard/SMSDashboard';

function Dashboard() {
  return (
    <div className="dashboard">
      <SMSDashboard />
    </div>
  );
}

export default Dashboard;
