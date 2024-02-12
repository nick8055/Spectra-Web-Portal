import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './Barchart.css';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function BarChart({title, data1, data2}) {
  const data = {
    labels: ['With Deadline', 'Deadline Expired'],
    datasets: [{
      label: '',
      data: [data1, data2],
      backgroundColor: [
        'rgb(156, 0, 0)', // Color for the first bar
        '#0052cc', // Color for the second bar
      ],
      borderColor: ['rgb(156, 0, 0)', '#0052cc'],
      borderWidth: 1,
      barThickness: 60,
    }]
  };

  const options = {
    responsive: true,
    scales:{
      y:{
        title:{
          display: true,
          text : 'No of Applications',
          fontSize: '32px',
        },
        
      }
    }

  };

  return (
    <div className='App-BarChart'>
      <div className="chart-container" style={{backgroundColor:'white'}}>
      <h1 style={{backgroundColor:'white'}} className='BarChart-Title'>{title}</h1>
      <div className='title-border-container'>
        <div className='title-border'></div>
      </div>
      <Bar style={{backgroundColor:'white'}} className='Bar' data={data} options={options} />
    </div>
    </div>

  );
}

export default BarChart;
