import { useEffect, useRef, useState } from "react";
import {
  FiHeart,
  FiMessageCircle,
  FiSend,
  FiBookmark,
  FiMaximize2,
  FiX,
} from "react-icons/fi";

function VideoPostCard({ post, belFoto, diasDesde }) {
  const videoRef = useRef(null);
  const modalVideoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleVideo() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }

  function handleVideoEnded() {
    setIsPlaying(false);
  }

  function openModal(e) {
    e.preventDefault();
    e.stopPropagation();

    const video = videoRef.current;
    if (video && !video.paused) {
      video.pause();
      setIsPlaying(false);
    }

    setIsModalOpen(true);
  }

  function closeModal() {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    setIsModalOpen(false);
  }

  useEffect(() => {
    if (isModalOpen) {
      const scrollY = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";

      setTimeout(() => {
        if (modalVideoRef.current) {
          modalVideoRef.current.play();
        }
      }, 50);

      return () => {
        const savedTop = document.body.style.top;

        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.width = "";

        const topValue = parseInt(savedTop || "0", 10);
        window.scrollTo(0, Math.abs(topValue));
      };
    }
  }, [isModalOpen]);

  return (
    <>
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

        <div className="instagram-post-image-wrapper">
          <div className="video-container">
            <video
              ref={videoRef}
              className="instagram-post-video"
              src={post.video}
              playsInline
              preload="metadata"
              onClick={toggleVideo}
              onEnded={handleVideoEnded}
            />

            <button
              type="button"
              className="video-play"
              onClick={toggleVideo}
              aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
            >
              {isPlaying ? "❚❚" : "▶"}
            </button>

            <button
              type="button"
              className="video-expand"
              onClick={openModal}
              aria-label="Expandir vídeo"
            >
              <FiMaximize2 />
            </button>
          </div>
        </div>

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

      {isModalOpen && (
        <div className="video-modal" onClick={closeModal}>
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="video-modal-close"
              onClick={closeModal}
              aria-label="Fechar vídeo"
            >
              <FiX />
            </button>

            <video
              ref={modalVideoRef}
              className="video-modal-player"
              src={post.video}
              controls
              playsInline
            />
          </div>
        </div>
      )}
    </>
  );
}

export default VideoPostCard;