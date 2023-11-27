// CSS
import './App.css';

// PACKAGES
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
//------- Local--------
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';

// PAGES
import Nav from './Components/Nav';
import About from './Pages/About';
import Home from './Pages/Home';
import Bonsai from './Pages/Bonsai';
import Flor from './Pages/Flor';
import Plantas from './Pages/Plantas';
import Categories from './Pages/Categories';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Categories />}/>
          <Route path="/products/bonsai" element={<Bonsai />} />
          <Route path="/products/plantas" element={<Plantas />} />
          <Route path="/products/flor" element={<Flor />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;