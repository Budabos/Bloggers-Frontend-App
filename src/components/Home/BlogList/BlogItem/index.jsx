// BlogItem Component
// This component represents a single blog item with its details.

// Import React and necessary components and styles
import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Chip';
import './styles.css';

// Define the BlogItem component, which takes a 'blog' prop
const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  return (
    <div className='blogItem-wrap'>
      {/* Display the blog cover image */}
      <img className='blogItem-cover' src={cover} alt='cover' />
      
      {/* Display a Chip component for the blog category */}
      <Chip label={category} />
      
      {/* Display the blog title */}
      <h3>{title}</h3>
      
      {/* Display the blog description */}
      <p className='blogItem-desc'>{description}</p>
      
      {/* Display the blog author and creation details */}
      <footer>
        <div className='blogItem-author'>
          {/* Display the author's avatar */}
          <img src={authorAvatar} alt='avatar' />
          
          <div>
            {/* Display the author's name */}
            <h6>{authorName}</h6>
            
            {/* Display the blog creation date */}
            <p>{createdAt}</p>
          </div>
        </div>
        
        {/* Add a link to navigate to the detailed blog page */}
        <Link className='blogItem-link' to={`/blog/${id}`}>
          ➝
        </Link>
      </footer>
    </div>
  );
};

// Export the BlogItem component as the default export of this module
export default BlogItem;
