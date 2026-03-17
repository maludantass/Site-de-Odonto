import { Link } from "react-router-dom";
import postOncologia from "../assets/oncologia.png";
import postCriancas from "../assets/crianca.jpeg";
import postMaos from "../assets/maos.png";
import postRetrospectiva from "../assets/retrospectiva.png";
import estudandoFoto from "../assets/estudando.jpeg";
import jalecoFoto from "../assets/jaleco.jpeg";
import belFoto from "../assets/bel.jpg";
import { FiHeart, FiMessageCircle, FiSend, FiBookmark } from "react-icons/fi";

function ContentSection() {
function diasDesde(dataPost) {
  const hoje = new Date();
  const data = new Date(dataPost);

  const diff = hoje - data;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (dias === 0) return "Hoje";
  if (dias === 1) return "Há 1 dia";

  if (dias < 30) {
    return `Há ${dias} dias`;
  }

  const meses = Math.floor(dias / 30);

  if (meses === 1) return "Há 1 mês";

  return `Há ${meses} meses`;
}

  const posts = [
    {
      id: 1,
      image: postOncologia,
      category: "Conteúdo educativo",
      title: "Atividade de oncologia oral",
      description: "Atividade de oncologia oral 🦷❤️",
      link: "https://www.instagram.com/p/DVyx5jrkaLS/?img_index=1",
      date: "2026-03-12",
    },
    {
      id: 2,
      image: postCriancas,
      category: "Ação Voluntária",
      title: "Mais perto da dentista que quero ser",
      description: "Dia de muito Amor em ação 🩷",
      link: "https://www.instagram.com/p/DRr_TSvDV1P/?img_index=10",
      date: "2025-11-30",
    },
    {
      id: 3,
      image: postMaos,
      category: "Aula Prática",
      title: "Aprendizados que fazem parte do caminho",
      description:
        "Deixando aqui no feed pq achei muito bonitinhas as fotos ❤️ Aula prática de como lavar as mãos corretamente 😋",
      link: "https://www.instagram.com/p/DOt-Xh4j0UU/?img_index=1",
      date: "2025-09-17",
    },
    {
      id: 4,
      image: postRetrospectiva,
      category: "Construção profissional",
      title: "Retrospectiva do 3° período",
      description:
        "Aproveitando as férias pra fazer uma retrospectiva desse período maravilhosoooo!! Ganhei MUITOS aprendizados. Foi o período que eu mais gostei até então!! Te espero, 4P!! 🩷",
      link: "https://www.instagram.com/odonto.bel_/",
      date: "2025-08-21",
    },
  ];

  return (
    <section className="section" id="conteudos">
      <div className="content-header content-header-beautiful">
        <div className="content-top-left">
          <span className="section-tag">Conteúdos</span>
          <Link to="/" className="back-button">
            ← Voltar para início
          </Link>
        </div>

        <div className="content-title-center">
          <h2>Posts, aprendizados e momentos da jornada</h2>
          <p>
            Uma seleção de conteúdos do Instagram que representam minha rotina,
            meus estudos e temas importantes da odontologia.
          </p>
        </div>

        <a
          className="content-instagram-link"
          href="https://www.instagram.com/odonto.bel_/"
          target="_blank"
          rel="noreferrer"
        >
          Ver perfil no Instagram
        </a>
      </div>

      <div className="content-feed-grid instagram-style-feed">
        {posts.map((post) => (
          <article className="instagram-post-card" key={post.id}>
            <div className="instagram-post-top">
              <div className="instagram-user">
                <img
                  src={belFoto}
                  alt="Bel Raposo"
                  className="instagram-avatar"
                />
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
        ))}
      </div>
    </section>
  );
}

export default ContentSection;