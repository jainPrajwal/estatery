import React from 'react';

import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Rent } from './pages/Rent';
import { Favourites } from './pages/Favourites';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Rent />} />
        <Route path='/rent' element={<Rent />}></Route>
        <Route path='/favourites' element={<Favourites />}></Route>
      </Routes>
    </>


  );
}

export default App;
