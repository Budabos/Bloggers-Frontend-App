// EmptyList Component
// This component represents a visual indication of an empty list.

// Import React and the component-specific styles
import React from 'react';
import './styles.css';

// Define the EmptyList component
const EmptyList = () => (
  <div className='emptyList-wrap'>
    <img src='/assets/images/13525-empty.gif' alt='empty' />
  </div>
);

// Export the EmptyList component as the default export of this module
export default EmptyList;
