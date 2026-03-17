import { Link } from "react-router-dom";
import belFoto from "../assets/bel.jpg";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-text">
        <span className="hero-tag">Estudante de Odontologia • UFPE</span>

        <h1>
          Bel Raposo,
          <br />
          construindo minha jornada
          <br />
          na odontologia
        </h1>

        <p>
          Um espaço para compartilhar rotina, aprendizados, descobertas e os
          passos de uma futura dentista apaixonada por sorrisos, cuidado e
          evolução.
        </p>

        <div className="hero-buttons">
          <a
            className="primary-button"
            href="https://www.instagram.com/odonto.bel_/"
            target="_blank"
            rel="noreferrer"
          >
            Ver Instagram
          </a>

          <Link className="secondary-button" to="/jornada">
            Ver jornada
          </Link>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <div className="hero-blob"></div>
        <img className="hero-image" src={belFoto} alt="Bel Raposo" />
      </div>
    </section>
  );
}

export default Hero;