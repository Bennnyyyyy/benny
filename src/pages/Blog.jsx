// src/pages/Blog.jsx
import { Link } from 'react-router-dom';
import '../styles/blog.css';
import blogData from '../data/blogData'; // Assuming you have blogData or static posts

const Blog = () => {
  return (
    <div className="blog-page">
      <h1>Educational Tour Blog</h1>
      <div className="blog-grid">
        {blogData.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.images[0]} alt={post.title} /> {/* Displaying first image in the images array */}
            <div className="blog-card-content">
              <h2>{post.title}</h2>
              <p>{post.content.slice(0, 150)}...</p> {/* Excerpt from content */}
              <Link to={`/blog/${post.id}`} className="read-more-btn">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
