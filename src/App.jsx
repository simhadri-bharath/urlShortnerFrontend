import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import RegisterPage from './components/RegisterPage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      
      <Router>
      <Navbar />
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path='/register' element={<RegisterPage />}/>
        </Routes>
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
