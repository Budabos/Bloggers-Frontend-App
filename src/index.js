// index.js

// Import React and ReactDOM for rendering
import React from 'react';
import ReactDOM from 'react-dom';

// Import the main App component
import App from './App';

// Import BrowserRouter for client-side routing
import { BrowserRouter } from 'react-router-dom';

// Render the App component within the BrowserRouter
ReactDOM.render(
  <React.StrictMode>
    {/* Wrap the App component with BrowserRouter for client-side routing */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  // Render the entire application within the root element in the HTML document
  document.getElementById('root')
);
