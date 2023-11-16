import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
// local components
import Nav from './components/Nav';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
