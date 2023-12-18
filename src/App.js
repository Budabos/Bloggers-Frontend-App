// Import necessary dependencies and components from React and other modules
import React from 'react';
import './App.css';  // Import the CSS file for styling
import Blog from './pages/Blog';  // Import the Blog component
import Home from './pages/Home';  // Import the Home component
import { Routes, Route, Navigate } from 'react-router';  // Import necessary components from react-router

// Define the main App component
const App = () => {
  return (
    <div className='container'> {/* Main container div for the entire application */}
    
      {/* Set up routes using the Routes component */}
      <Routes>
        {/* Route for the home page */}
        <Route path='/' element={<Home />} />
        
        {/* Route for individual blog posts with a dynamic parameter ':id' */}
        <Route path='/blog/:id' element={<Blog />} />
        
        {/* Wildcard route to redirect undefined paths to the home page */}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      
    </div>
  );
};

// Export the App component as the default export of this module
export default App;
