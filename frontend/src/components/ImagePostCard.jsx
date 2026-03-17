import { FiHeart, FiMessageCircle, FiSend, FiBookmark } from "react-icons/fi";

function ImagePostCard({ post, belFoto, diasDesde }) {
  return (
    <article className="instagram-post-card">
      <div className="instagram-post-top">
        <div className="instagram-user">
          <img src={belFoto} alt="Bel Raposo" className="instagram-avatar" />
          <div>
            <strong>odonto.bel_</strong>
            <span>{diasDesde(post.date)}</span>
          </div>
        </div>

        <span className="instagram-more">•••</span>
      </div>

      <a href={post.link} target="_blank" rel="noreferrer">
        <div className="instagram-post-image-wrapper">
          <img
            src={post.image}
            alt={post.title}
            className="instagram-post-image"
          />
        </div>
      </a>

      <div className="instagram-post-actions">
        <div className="instagram-icons-left">
          <FiHeart />
          <FiMessageCircle />
          <FiSend />
        </div>

        <FiBookmark />
      </div>

      <div className="instagram-post-body">
        <span className="insta-card-category">{post.category}</span>

        <h3>{post.title}</h3>

        <p>
          <strong>@odonto.bel_</strong> {post.description}
        </p>

        <a
          href={post.link}
          target="_blank"
          rel="noreferrer"
          className="instagram-open-link"
        >
          Abrir no Instagram
        </a>
      </div>
    </article>
  );
}

export default ImagePostCard;