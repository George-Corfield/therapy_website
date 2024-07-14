import React from 'react';
import './App.scss';
import Navbar from './Components/Navbar/navbar';
import Home from './Components/Home/home'
import Contact from './Components/Contact/contact'
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
