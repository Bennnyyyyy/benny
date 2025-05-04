// src/pages/BlogPost.jsx
import '../styles/blog.css';

const BlogPost = ({ post, onBack }) => {
  if (!post) {
    return (
      <div className="blog-post-container">
        <div className="not-found">Post not found</div>
        <button onClick={onBack} className="back-btn">
          ← Back to Blog
        </button>
      </div>
    );
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
          <button onClick={onBack} className="back-btn">
            ← Back to Blog
          </button>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;