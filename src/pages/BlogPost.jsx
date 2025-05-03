// src/pages/BlogPost.jsx
import { useParams, Link } from "react-router-dom";
import blogData from "../data/blogData";
import "../styles/blog.css";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogData.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div className="not-found">Post not found</div>;
  }

  return (
    <div className="blog-post-container">
      <article className="blog-post">
        <header className="post-header">
          <h1>{post.title}</h1>
          <p className="post-meta">
            <span className="date">{post.date}</span>
          </p>
        </header>
        
        <div className="post-hero">
          <img src={post.images[0]} alt={`Main - ${post.title}`} className="hero-image" />
        </div>
        
        <div className="post-content">
          <p>{post.content}</p>
        </div>
        
        {post.images.length > 1 && (
          <div className="post-gallery">
            <h3>More Photos</h3>
            <div className="gallery-grid">
              {post.images.slice(1).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${post.title} ${index + 1}`}
                  className="gallery-image"
                />
              ))}
            </div>
          </div>
        )}

        <div className="back-to-blog">
          <Link to="/blog" className="back-btn">
            ← Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;