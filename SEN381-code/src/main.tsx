import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './Login.tsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login.tsx';
import Client from './Client.tsx';
import Admin from './Admin.tsx';
import CallCentre from './CallCentre.tsx';
import Technician from './Technician.tsx';
import ErrorPage from './ErrorPage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/client' element={<Client/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/callcentre' element={<CallCentre/>}/>
        <Route path='/technician' element={<Technician/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
