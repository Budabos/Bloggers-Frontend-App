import React from 'react';

import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';
import { Routes, Route, Navigate } from 'react-router';
const App = () => {
  return (
    <div className='container'>
    
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog/:id' element={<Blog />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      
    </div>
  );
};

export default App;
