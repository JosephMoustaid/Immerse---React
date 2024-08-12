import React from 'react';
import { Line } from 'react-chartjs-2';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Enrollment = ({ labels, dataPoints }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Cumulative Enrollment Over Time',
        data: dataPoints,
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
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Enrollment Over Time',
      },
    },
  };

  return (
    <div className="card mb-4 shadow" >
      <div className="card-body">
        <h5 className="card-title">Enrollment</h5>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Enrollment;
