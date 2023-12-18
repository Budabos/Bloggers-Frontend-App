// Chip Component
// This component represents a simple chip element with a label.

// Import React and the component-specific styles
import React from 'react';
import './styles.css';

// Define the Chip component, which takes a 'label' prop
const Chip = ({ label }) => <p className='chip'>{label}</p>;

// Export the Chip component as the default export of this module
export default Chip;
