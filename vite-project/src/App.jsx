// import React from 'react';
// import Navbar from './Navbar';
// import './App.css'
// import Table from './Table'
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faEdit, faTrashAlt, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

// library.add(faEdit, faTrashAlt, faArrowUp, faArrowDown);

// import My from './My'

// const App = () => {


//   return (
//     <>
//        <Navbar/>
//        <h1 className='student-info'> Student Info</h1>
//        <Table/>
//        <My/>

//     </>
//   );
// };

// export default App;


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

















// import React, { useState } from 'react';
// import Navbar from './Mynav';
// import Table from './Mytab';

// const App = () => {
//   const [tableData, setTableData] = useState([]);

//   const handleAddData = (newData) => {
//     setTableData((prevData) => [...prevData, newData]);
//   };

//   return (
//     <div>
//       <Navbar onAddData={handleAddData} />
//       <Table data={tableData} />
//     </div>
//   );
// };

// export default App;

