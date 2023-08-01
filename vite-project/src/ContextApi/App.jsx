import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import InputText from './InputText';
import { ButtonContextProvider } from './ButtonContext';
import Body from './Body';
import Button from './Button';


function App() {


   return (
    <>
      <ButtonContextProvider>
      <div>
         <Button/>
        <InputText/>
        <Body/>
      </div>


      </ButtonContextProvider>
   
    
    </>
  )
}

export default App
