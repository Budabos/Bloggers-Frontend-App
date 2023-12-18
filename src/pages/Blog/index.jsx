// Blog Component
// This component represents the detailed view of a single blog post.

// Import React and necessary components, hooks, and styles
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../../config/data';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';

// Define the Blog component
const Blog = () => {
  // Extract the 'id' parameter from the route
  const { id } = useParams();

  // State to store the blog details
  const [blog, setBlog] = useState(null);

  // Effect to fetch and set the blog details based on the 'id' parameter
  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, [id]);

  return (
    <>
      {/* Link to navigate back to the home page */}
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      
      {/* Conditional rendering based on whether the blog details are available */}
      {blog ? (
        <div className='blog-wrap'>
          {/* Header section displaying publication date, title, and subcategories */}
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className='blog-subCategory'>
              {/* Display subcategories using Chip components */}
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          
          {/* Display the blog cover image */}
          <img src={blog.cover} alt='cover' />
          
          {/* Display the blog description */}
          <p className='blog-desc'>{blog.description}</p>
        </div>
      ) : (
        // Display an EmptyList component if the blog details are not available
        <EmptyList />
      )}
    </>
  );
};

// Export the Blog component as the default export of this module
export default Blog;
