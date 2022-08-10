import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import React from 'react';
  
// importing pages
import Home from './pages/Home';
import Despesas from './pages/Despesas';
import Receitas from './pages/Receitas';

  // pages routes
  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/receitas" element={<Receitas />} />
          <Route path="/despesas" element={<Despesas />} />
          <Route path="" element={<Home />} />
        </Routes>
      </Router>
    );
  }
  
  export default App;