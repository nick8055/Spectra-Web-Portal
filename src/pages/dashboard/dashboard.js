import React from 'react';
import BarChart from '../../components/Barchart/Barchart';

const Dashboard = () => {

  return (
    <div>
        <BarChart title={"JOB APPLICATION STATISTICS"} data1={25} data2={50}/>
        <BarChart title={"INTERNSHIP APPLICATION STATISTICS"} data1={25} data2={50}/>
        <BarChart title={"HACKATHON APPLICATION STATISTICS"} data1={25} data2={50}/>
    </div>
  );
};

export default Dashboard;