import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import '../components/styles/Graph.css';

// Register Chart.js components
Chart.register(ArcElement, Tooltip, Legend);

const ApplicationResponseChart = () => {
  const data = {
    labels: ['+0,4%', '+2,5%', '-0,5%'],
    datasets: [
      {
        data: [30,50, 40],
        backgroundColor: ['#B4DFE5', '#3B88B6','#F68D2B'],
        
        borderWidth: 8,
        cutout: '80%',
        rotation: 135,
        circumference: 360,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Show legend if needed
        position: 'top', // Position the legend
      },
      tooltip: {
        enabled: true, // Enable tooltips
      },
    },
  };

  return (
    <div className="application-response-chart">
      <h3 className="chart-title">Application Response</h3>
      <div className="chart-container">
        <Doughnut data={data} options={options} />
      </div>
      <div className="percentage-text top-left"></div>
      <div className="percentage-text top-right"></div>
      <div className="percentage-text bottom-right"></div>
      <a href="#" className="download-link">Download Report</a>
    </div>
  );
};

export default ApplicationResponseChart;
