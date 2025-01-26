// import { useState } from 'react';
import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { getApps } from './utils/helper';

function App() {
  const CurrentApp=getApps();
  return (
    <>
      
      <Router>
    <CurrentApp />
      </Router>
      
    </>
  );
}

export default App;
