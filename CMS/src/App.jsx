// src/App.jsx
import React from 'react';
import Sidebar from './components/Sidebar/Sidebar.jsx'; 
import './App.css'; 
import "./css/style.css"
import { Outlet } from 'react-router-dom'; 
function App() {
  return (
    <div className="container-fluid m-auto" data-bs-theme="light">
      <Sidebar />
      <div className='m-auto'>
        <div className=" content">
          <Outlet /> 
        </div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js"></script>
    </div>
  );
}

export default App;
