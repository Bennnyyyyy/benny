// src/pages/Blog.jsx
import { Link } from 'react-router-dom';
import blogData from '../data/blogData';
import '../styles/blog.css';

const Blog = () => {
  return (
    <div className="blog-page">
      <header className="blog-header">
        <h1>Educational Tour Blog</h1>
        <p className="blog-subtitle">Chronicles of our learning journey</p>
      </header>

      <div className="blog-grid">
        {blogData.map((post, index) => (
          <div 
            key={post.id} 
            className="blog-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="card-image-container">
              <img 
                src={post.images[0]} 
                alt={post.title} 
                className="card-image" 
              />
              <div className="card-date">{post.date}</div>
            </div>
            <div className="card-content">
              <h2>{post.title}</h2>
              <p className="card-excerpt">{post.content.split(' ').slice(0, 25).join(' ')}...</p>
              <div className="card-footer">
                <Link to={`/blog/${post.id}`} className="read-more-btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;