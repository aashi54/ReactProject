import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Table from './components/Table';
import './App.css'

const App = () => {
  const [tableData, setTableData] = useState([]);

  const handleDeleteData = (index) => {
    setTableData((prevData) => prevData.filter((item, idx) => idx !== index));
  };


  const handleAddData = (newData) => {
    setTableData((prevData) => [...prevData, newData]);
  };

 
  return (
    <div>
      <Navbar onAddData={handleAddData} tableData={tableData}/>
      <h1 className='student-info'>Student Info</h1>
      <Table data={tableData} onDeleteData = {handleDeleteData}/>
    </div>
  );
};

export default App;