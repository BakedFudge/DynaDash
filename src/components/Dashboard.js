import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = ({ data }) => {
  const options = {
    responsive: true,
    animation: {
      duration: 500,
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Real-time Data Monitoring',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div className="dashboard">
      <div className="chart-container">
        <h2>Live Metrics</h2>
        <Line options={options} data={data} />
      </div>
      <div className="stats">
        <div className="stat-card">
          <h3>Current Value</h3>
          <p className="stat-value">{data.datasets[0].data.slice(-1)[0] || 0}</p>
        </div>
        <div className="stat-card">
          <h3>Average</h3>
          <p className="stat-value">
            {data.datasets[0].data.length 
              ? Math.round(data.datasets[0].data.reduce((a, b) => a + b, 0) / data.datasets[0].data.length) 
              : 0}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;