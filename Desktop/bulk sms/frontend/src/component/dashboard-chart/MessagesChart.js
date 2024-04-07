import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import styles from './MessagesChart.module.css'; // Adjust the import path as necessary

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Messages Sent',
      data: [65, 59, 80, 81, 56, 55],
      fill: true,
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

function MessagesChart() {
  return (
    <div className={styles.chartContainer}>
      <h3 className={styles.chartHeading}>Messages Sent Over Time</h3>
      <Line data={data} options={options} />
    </div>
  );
}

export default MessagesChart;
