import React from 'react'
import './App.css'
import Head from './Head';
import  { Outlet }  from 'react-router-dom';


import Navbar from './Navbar'

function App() {

   
   return (
    <>
      <Head/>
     <Navbar/>
     <Outlet/>
    
     
 </>
  )
}

export default App;

