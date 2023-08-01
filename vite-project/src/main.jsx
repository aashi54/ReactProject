import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTrashAlt, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

library.add(faEdit, faTrashAlt, faArrowUp, faArrowDown);






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />


  </React.StrictMode>,
)
