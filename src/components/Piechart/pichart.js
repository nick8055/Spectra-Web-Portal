import './piechart.css'
import React from 'react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

import {Pie} from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

function ChartApp({data1, data2, pietitle}){
    const data = {
        labels: ['Open', 'Expired'],
        datasets: [
            {
                data : [data1, data2],
                backgroundColor : [ '#0052cc','rgb(156, 0, 0)']

            }
        ]
    }

    const options = {
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              let label = data.labels[tooltipItem.index] || '';
    
              if (label) {
                label += ': ';
              }
              label += Math.round(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] * 100) / 100;
              return label;
            },
          },
        },
      };


    return(
        <div className='chartApp'>
            <h1 className='pieTitle'>{pietitle}</h1>
            <Pie style={{backgroundColor:'white'}} data={data} options={options}></Pie>
        </div>
    )
};

export default ChartApp;


// import React from 'react';
// import { Pie } from 'react-chartjs-2';

// import {
//     Chart as ChartJS,
//     ArcElement,
//     Tooltip,
//     Legend
// } from 'chart.js';

// const ChartApp = () => {
//   const data = {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [
//       {
//         label: 'My First Dataset',
//         data: [300, 50, 100, 40, 120, 70],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.5)',
//           'rgba(54, 162, 235, 0.5)',
//           'rgba(255, 206, 86, 0.5)',
//           'rgba(75, 192, 192, 0.5)',
//           'rgba(153, 102, 255, 0.5)',
//           'rgba(255, 159, 64, 0.5)',
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     tooltips: {
//       callbacks: {
//         label: function (tooltipItem, data) {
//           let label = data.labels[tooltipItem.index] || '';

//           if (label) {
//             label += ': ';
//           }
//           label += Math.round(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] * 100) / 100;
//           return label;
//         },
//       },
//     },
//   };

//   return (
//     <div>
//       <h2>Pie Chart Example</h2>
//       <Pie data={data} options={options} />
//     </div>
//   );
// };

// export default ChartApp;

