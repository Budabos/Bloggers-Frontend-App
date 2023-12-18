// SearchBar Component
// This component represents a search bar for filtering content by category.

// Import React and the component-specific styles
import React from 'react';
import './styles.css';

// Define the SearchBar component, which takes several props for functionality
const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className='searchBar-wrap'>
    <form onSubmit={formSubmit}>
      {/* Input field for entering search keywords */}
      <input
        type='text'
        placeholder='Search By Category'
        value={value}
        onChange={handleSearchKey}
      />
      
      {/* Display 'X' button to clear search input if value is present */}
      {value && <span onClick={clearSearch}>X</span>}
      
      {/* Submit button for initiating the search */}
      <button>Go</button>
    </form>
  </div>
);

// Export the SearchBar component as the default export of this module
export default SearchBar;
