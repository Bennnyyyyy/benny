import { useParams } from "react-router-dom";
import blogData from "../data/blogData";
import "../styles/blog.css"; // Same style for consistency

const BlogPost = () => {
  const { id } = useParams();
  const post = blogData.find((p) => p.id === parseInt(id));

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p className="blog-post-date">{post.date}</p>
      {post.images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`${post.title} ${index}`}
          className="blog-post-image"
        />
      ))}
      <p className="blog-post-content">{post.content}</p>
    </div>
  );
};

export default BlogPost;
