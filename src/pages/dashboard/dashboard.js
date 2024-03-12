import React from 'react';
import BarChart from '../../components/Barchart/Barchart';
import ChartApp from '../../components/Piechart/pichart';
import './dashboard.css';

const Dashboard = () => {

  return (
    <div>
      <h1 className='dash-title'>DASHBOARD</h1><br/>
      <div className='dash-title-border-container'>
        <div className='dash-title-border'></div>
      </div>
      <div className='dashboard-container'>
            <ChartApp data1={5} data2={5} pietitle={'JOBS'}/>
            <ChartApp data1={5} data2={5} pietitle={'INTERNSHIPS'}/>
            <ChartApp data1={5} data2={5} pietitle={'HACKATHONS'}/>
      </div>
    </div>  
  );
};

export default Dashboard;