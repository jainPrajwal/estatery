import React from 'react';

import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Rent } from './pages/Rent';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Rent />} />
        <Route path='/rent' element={<Rent />}></Route>
      </Routes>
    </>


  );
}

export default App;
